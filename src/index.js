import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Login from './components/login/Login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));
serviceWorker.unregister();
