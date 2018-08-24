import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import { withFormsy } from 'formsy-react';
import TextField from 'material-ui/TextField';

import FormsyComponent from './FormsyComponent';

export class FormsyText extends FormsyComponent {
  static propTypes = {
    convertValue: PropTypes.func,
    defaultValue: PropTypes.any,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    requiredError: PropTypes.string,
    underlineFocusStyle: PropTypes.object,
    underlineStyle: PropTypes.object,
    updateImmediately: PropTypes.bool,
    validationColor: PropTypes.string,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    value: PropTypes.any,
  };

  /**
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      value: this.controlledValue(),
    };
  }

  componentWillMount() {
    this.props.setValue(this.controlledValue());
  }

  componentWillReceiveProps(nextProps) {
    const isValueChanging = nextProps.value !== this.props.value;
    if (isValueChanging || nextProps.defaultValue !== this.props.defaultValue) {
      const value = this.controlledValue(nextProps);
      const isValid = this.props.isValidValue(value);

      if (isValueChanging || this.props.defaultValue === this.props.getValue()) {
        this.setState({ value, isValid });
        if (this.props.getValue() !== value) this.props.setValue(value);
      }
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (
      nextState._isPristine && // eslint-disable-line no-underscore-dangle
      nextState._isPristine !== this.state._isPristine
    ) {
      // eslint-disable-line no-underscore-dangle
      // Calling state here is valid, as it cannot cause infinite recursion.
      const value = this.controlledValue(nextProps);
      const isValid = this.props.isValidValue(value);
      this.props.setValue(value);
      this.setState({ value, isValid });
    }
  }

  controlledValue = (props = this.props) =>
    props.value || props.defaultValue || this.convertValue('');

  handleBlur = event => {
    this.props.setValue(this.convertValue(event.currentTarget.value));
    delete this.changeValue;
    if (this.props.onBlur) this.props.onBlur(event);
  };

  handleChange = event => {
    // Update the value (and so display any error) after a timeout.
    if (this.props.updateImmediately) {
      if (!this.changeValue) {
        this.changeValue = this.debounce(this.props.setValue, 400);
      }
      this.changeValue(this.convertValue(event.currentTarget.value));
    } else {
      // If there was an error (on loss of focus) update on each keypress to resolve same.
      if (this.props.getErrorMessage() != null) {
        this.props.setValue(this.convertValue(event.currentTarget.value));
      } else {
        // Only update on valid values, so as to not generate an error until focus is lost.
        if (this.props.isValidValue(event.target.value)) {
          this.props.setValue(this.convertValue(event.currentTarget.value));
          // If it becomes invalid, and there isn't an error message, invalidate without error.
        }
      }
    }

    // Controlled component
    this.setState({
      value: event.currentTarget.value,
      isValid: this.props.isValidValue(event.currentTarget.value),
    });
    if (this.props.onChange) this.props.onChange(event, event.currentTarget.value);
  };

  handleKeyDown = event => {
    if (keycode(event) === 'enter')
      this.props.setValue(this.convertValue(event.currentTarget.value));
    if (this.props.onKeyDown) this.props.onKeyDown(event, event.currentTarget.value);
  };

  convertValue = value => {
    if (this.props.convertValue) {
      return this.props.convertValue(value);
    }
    return value;
  };

  render() {
    /* eslint no-unused-vars: 0 */
    const {
      defaultValue,
      convertValue,
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
      requiredError,
      setValidations,
      setValue,
      showError,
      showRequired,
      underlineFocusStyle,
      underlineStyle,
      updateImmediately,
      validationError,
      validationErrors,
      validations,
      validationColor,
      value,
      ...rest
    } = this.props;

    const isRequiredError =
      isRequired() && !isPristine() && !isValid() && isFormSubmitted() && requiredError;

    const errorText = getErrorMessage() || isRequiredError;

    return (
      <TextField
        disabled={isFormDisabled()}
        {...rest}
        errorText={errorText}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        ref={this.setMuiComponentAndMaybeFocus}
        value={this.state.value}
        underlineStyle={this.state.isValid ? { borderColor: validationColor } : underlineStyle}
        underlineFocusStyle={
          this.state.isValid ? { borderColor: validationColor } : underlineFocusStyle
        }
      />
    );
  }
}

export default withFormsy(FormsyText);
