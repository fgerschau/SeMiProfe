const config = require('../config/config.json');

const co = require('co');
const request = require('request-promise');
const bcrypt = require('bcrypt-nodejs');

function getByEmail(email) {
  return co(function* () {
    const options = {
      uri: `${config.apiUrl}/user/email?email=${email}`,
      json: true,
    };

    const user = yield request(options);

    return user;
  }).catch(console.error);
}

exports.getByEmail = getByEmail;

function create(user) {
  return co(function* () {
    const options = {
      method: 'POST',
      uri: `${config.apiUrl}/user`,
      body: user,
      json: true,
    };

    const newUser = yield request(options);

    return newUser;
  }).catch(console.error);
}

exports.create = create;

function validatePassword(email, password) {
  return co(function* () {
    const user = yield getByEmail(email);

    const isValid = bcrypt.compareSync(password, user.password);

    return isValid ? user : null;
  }).catch(console.error);
}

exports.validatePassword = validatePassword;

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

exports.generateHash = generateHash;
