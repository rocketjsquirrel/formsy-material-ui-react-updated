import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import Toggle from 'material-ui/Toggle';

import FormsyComponent from './FormsyComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class FormsyToggle extends FormsyComponent {
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
      errorMessage,
      errorMessages,
      value,
      hasValue,
      innerRef,
      isFormDisabled,
      isFormSubmitted,
      isPristine,
      required,
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

    let toggleValue = value;

    if (typeof toggleValue === 'undefined') {
      toggleValue = typeof defaultToggled !== 'undefined' ? defaultToggled : false;
    }

    return (
      <MuiThemeProvider>
        <Toggle
          disabled={isFormDisabled}
          {...rest}
          onToggle={this.handleChange}
          ref={this.setMuiComponentAndMaybeFocus}
          toggled={toggleValue}
        />
      </MuiThemeProvider>
    );
  }
}

const WithFormsyFormsyToggle = withFormsy(FormsyToggle);

export { WithFormsyFormsyToggle as FormsyToggle };
