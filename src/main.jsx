import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import store from './utils/store/store.js';
import { Provider } from 'react-redux';  // Import the Provider component

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

