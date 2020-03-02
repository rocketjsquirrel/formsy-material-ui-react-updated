import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText } from '../../forms/FormsyText';
import { FormsyCheckbox } from '../../forms/FormsyCheckbox';

class Login extends Component {
  render() {
    return (
      <>
        <Formsy>
          <FormsyText
            fullWidth
            name="email"
            type="email"
            validations="isEmail"
            validationErrors={{
              isEmail: 'This doesn’t look like a valid email address.',
            }}
            required
            hintText="email address"
            floatingLabelText="Email"
          />
          <FormsyText
            fullWidth
            name="password"
            type="password"
            required
            hintText="password"
            floatingLabelText="Password"
          />
          <FormsyCheckbox
            name="rememberMe"
            label="Remember me"
            setValue={() => {}}
            value={true}
            style={{ marginTop: '20px' }}
          />
        </Formsy>
      </>
    );
  }
}

export { Login };
