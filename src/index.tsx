import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/store/store';
import 'bootstrap/dist/css/bootstrap.css';
import '@/index.css';
import App from '@/App';

document.body.classList.add('body-style');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
