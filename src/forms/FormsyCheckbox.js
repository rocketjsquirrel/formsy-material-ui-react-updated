import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import Checkbox from 'material-ui/Checkbox';

import FormsyComponent from './FormsyComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class FormsyCheckbox extends FormsyComponent {
  static propTypes = {
    defaultChecked: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    onChange: () => {},
    validationError: '',
    validationErrors: {},
    validations: {},
    defaultChecked: false,
  };

  componentDidMount() {
    this.props.setValue(this.muiComponent.isChecked());
  }

  handleChange = (event, value) => {
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(event, value);
  };

  render() {
    /* eslint no-unused-vars: 0 */
    const {
      defaultChecked,
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
      ...rest
    } = this.props;

    let checkBoxValue = value;
    if (typeof checkBoxValue === 'undefined') {
      checkBoxValue = typeof defaultChecked !== 'undefined' ? defaultChecked : false;
    }
    return (
      <MuiThemeProvider>
        <Checkbox
          disabled={isFormDisabled}
          {...rest}
          checked={checkBoxValue}
          onCheck={this.handleChange}
          ref={this.setMuiComponentAndMaybeFocus}
        />
      </MuiThemeProvider>
    );
  }
}

export default withFormsy(FormsyCheckbox);
