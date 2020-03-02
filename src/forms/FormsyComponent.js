import React from 'react';

export default class FormsyComponent extends React.Component {
  setMuiComponentAndMaybeFocus = c => {
    if (c === this.muiComponent) return;

    this.muiComponent = c;

    if (c && typeof c.focus === 'function') {
      this.focus = () => c.focus();
    } else if (this.hasOwnProperty('focus')) {
      delete this.focus;
    }
  };

  debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };
}
