import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  React.createElement(BrowserRouter, {}, React.createElement(App)),
  document.getElementById('root'),
);
registerServiceWorker();
