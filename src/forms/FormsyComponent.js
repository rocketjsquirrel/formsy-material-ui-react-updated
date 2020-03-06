import React from 'react';

export default class FormsyComponent extends React.Component {
  setMuiComponentAndMaybeFocus = c => {
    if( c === this.muiComponent ) return;
    
    this.muiComponent = c;
    
    if( c && typeof c.focus === 'function' ){
      this.focus = () => c.focus();
    } else if( this.hasOwnProperty( 'focus' ) ){
      delete this.focus;
    }
  };
  
  getErrors = (errorMessage, errorMessages, requireErrorText ) => {
    let errorText = errorMessage;
    
    if( !errorMessage  ){
      errorText = requireErrorText ? requireErrorText : "Input Required";
    }
    
    if( !errorText && errorMessages.length > 1 ){
      for( let message in errorMessages ){
        errorText += `${ message }`
      }
    }
    return errorText;
  };
  
  debounce = ( fn, delay ) => {
    let timeout;
    return ( ...args ) => {
      clearTimeout( timeout );
      timeout = setTimeout( () => {
        fn.apply( this, args );
      }, delay );
    };
  };
}
