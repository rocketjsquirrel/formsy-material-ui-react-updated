import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import TimePicker from 'material-ui/TimePicker';

import FormsyComponent from './FormsyComponent';

class FormsyTime extends FormsyComponent {
  static propTypes = {
    defaultTime: PropTypes.object,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    value: PropTypes.object,
  };

  componentDidMount() {
    const { defaultTime } = this.props;
    const value = this.props.getValue();

    if (typeof value === 'undefined' && typeof defaultTime !== 'undefined') {
      this.props.setValue(defaultTime);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value) {
      if (!this.props.value || !this.timesEq(this.props.value, newProps.value)) {
        this.props.setValue(newProps.value);
      }
    } else if (!this.props.value && newProps.defaultTime) {
      if (!this.timesEq(this.props.defaultTime, newProps.defaultTime)) {
        this.props.setValue(newProps.defaultTime);
      }
    }
  }

  /**
   * Check time equality by hours and minutes
   * @param {Date} date1
   * @param {Date} date2
   */
  timesEq = (date1, date2) => {
    return date1.getHours() === date2.getHours() && date1.getMinutes() === date2.getMinutes();
  };

  handleChange = (event, value) => {
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(event, value);
  };

  render() {
    const {
      defaultTime,
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

    return (
      <TimePicker
        disabled={isFormDisabled()}
        {...rest}
        errorText={getErrorMessage()}
        onChange={this.handleChange}
        ref={this.setMuiComponentAndMaybeFocus}
        value={getValue()}
      />
    );
  }
}

export default withFormsy(FormsyTime);
