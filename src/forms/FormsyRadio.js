import React from 'react';
import { withFormsy } from 'formsy-react';
import RadioButton from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class FormsyRadio extends React.Component {
  render() {
    /* eslint no-unused-vars: 0 */
    const {
      errorMessage,
      errorMessages,
      value,
      hasValue,
      innerRef,
      isFormDisabled,
      isFormSubmitted,
      isPristine,
      required,
      isValid,
      isValidValue,
      resetValue,
      setValidations,
      setValue,
      showError,
      showRequired,
      validationError,
      validationErrors,
      validations,
      ...rest
    } = this.props;

    return (
      <MuiThemeProvider>
        <RadioButton {...rest} />
      </MuiThemeProvider>
    );
  }
}

export default withFormsy(FormsyRadio);
