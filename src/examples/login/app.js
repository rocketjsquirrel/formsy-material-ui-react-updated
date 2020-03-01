import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText } from '../../forms/FormsyText';

class Login extends Component {
  render() {
    return (
      <>
        <h2>hi</h2>
        <Formsy>
          <FormsyText
            fullWidth
            name="password"
            type="password"
            required
            hintText="password"
            floatingLabelText="Password"
            setValue={() => {}}
          />
        </Formsy>
      </>
    );
  }
}

export { Login };
