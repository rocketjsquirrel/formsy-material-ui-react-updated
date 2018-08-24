import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import SelectField from 'material-ui/SelectField';

import FormsyComponent from './FormsyComponent';

export class FormsySelect extends FormsyComponent {
  static propTypes = {
    children: PropTypes.node,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    requiredError: PropTypes.string,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    value: PropTypes.any,
  };

  state = {
    hasChanged: false,
  };

  handleChange = (event, index, value) => {
    this.props.setValue(value);

    this.setState({
      hasChanged: value !== '',
    });

    if (this.props.onChange) this.props.onChange(event, value, index);
  };

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
      onChange,
      resetValue,
      requiredError,
      setValidations,
      setValue,
      showError,
      showRequired,
      validationError,
      validationErrors,
      validations,
      value: valueProp,
      ...rest
    } = this.props;

    const isRequiredError =
      isRequired() && !isPristine() && !isValid() && isFormSubmitted() && requiredError;
    const errorText = getErrorMessage() || isRequiredError;
    const value = this.state.hasChanged ? getValue() : valueProp;

    return (
      <SelectField
        disabled={isFormDisabled()}
        errorText={errorText}
        onChange={this.handleChange}
        ref={this.setMuiComponentAndMaybeFocus}
        value={value}
        {...rest}
      >
        {this.props.children}
      </SelectField>
    );
  }
}

export default withFormsy(FormsySelect);
