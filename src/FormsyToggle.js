import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import Toggle from 'material-ui/Toggle';

import FormsyComponent from './FormsyComponent';

export class FormsyToggle extends FormsyComponent {
  static propTypes = {
    defaultToggled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  componentDidMount() {
    this.props.setValue(this.muiComponent.isToggled());
  }

  handleChange = (event, value) => {
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(event, value);
  };

  render() {
    /* eslint no-unused-vars: 0 */
    const {
      defaultValue,
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

    let value = getValue();

    if (typeof value === 'undefined') {
      value = typeof defaultToggled !== 'undefined' ? defaultToggled : false;
    }

    return (
      <Toggle
        disabled={isFormDisabled()}
        {...rest}
        onToggle={this.handleChange}
        ref={this.setMuiComponentAndMaybeFocus}
        toggled={value}
      />
    );
  }
}

export default withFormsy(FormsyToggle);
