import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import DatePicker from 'material-ui/DatePicker';

import FormsyComponent from './FormsyComponent';

export class FormsyDate extends FormsyComponent {
  static propTypes = {
    defaultDate: PropTypes.object,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    requiredError: PropTypes.string,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    value: PropTypes.object,
  };

  componentDidMount() {
    const { defaultDate } = this.props;
    const value = this.props.getValue();

    if (typeof value === 'undefined' && typeof defaultDate !== 'undefined') {
      this.props.setValue(defaultDate);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value) {
      if (!this.props.value || !this.datesEq(this.props.value, newProps.value)) {
        this.props.setValue(newProps.value);
      }
    } else if (!this.props.value && newProps.defaultDate) {
      if (!this.datesEq(this.props.defaultDate, newProps.defaultDate)) {
        this.props.setValue(newProps.defaultDate);
      }
    }
  }

  /**
   * Check date equality by year, month and day
   * @param {Date} date1
   * @param {Date} date2
   */
  datesEq = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getDate() === date2.getDate() &&
      date1.getDay() === date2.getDay()
    );
  };

  handleChange = (event, value) => {
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(event, value);
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
      name,
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

    const isRequiredError =
      isRequired() && !isPristine() && !isValid() && isFormSubmitted() && requiredError;
    const errorText = getErrorMessage() || isRequiredError;
    return (
      <DatePicker
        disabled={isFormDisabled()}
        {...rest}
        errorText={errorText}
        onChange={this.handleChange}
        ref={this.setMuiComponentAndMaybeFocus}
        value={getValue()}
      />
    );
  }
}

export default withFormsy(FormsyDate);
