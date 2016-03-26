import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';
// Following import is to copy normalize.css to destination folder
import styles from '../css/normalize.css'; // eslint-disable-line no-unused-vars

ReactDOM.render(<Router routes={ routes } history={ browserHistory } />,
  document.getElementById('app'));
