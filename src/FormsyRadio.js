import React from 'react';
import { withFormsy } from 'formsy-react';
import RadioButton from 'material-ui/RadioButton';

export class FormsyRadio extends React.Component {
  render() {
    /* eslint no-unused-vars: 0 */
    const {
      getErrorMessage,
      getErrorMessages,
      getValue,
      hasValue,
      innerRef,
      isFormDisabled,
      isFormSubmitted,
      isPristine,
      isRequired,
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

    return <RadioButton {...rest} />;
  }
}

export default withFormsy(FormsyRadio);
