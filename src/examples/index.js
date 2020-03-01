import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './login/app';

(async window => {
  // Setup root element
  let rootEl = document.getElementById('root');

  // Create render function
  const render = (Component, el) => {
    ReactDOM.render(<Component />, el);
  };

  render(Login, rootEl);
})(window);
