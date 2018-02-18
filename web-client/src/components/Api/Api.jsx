import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loading from './components/Loading';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function handleResponse(response) {
  this.setState({ loading: false, data: response.data });
  this.setData(response.data);
  return response.data;
}

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    const { setData } = props;
    this.setData = setData;
  }

  loadTeachers() {
    this.setData([]);
    this.setState({ loading: true });
    return axios.get('/user')
      .then(handleResponse.bind(this))
      .catch(() => { this.setState({ loading: false }); });
  }

  render() {
    return (
      <Fragment>
        {this.state.loading ? <Loading /> : this.props.children}
      </Fragment>
    );
  }
}

Api.propTypes = {
  setData: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Api.defaultProps = {
  children: <div />,
};

export default Api;
