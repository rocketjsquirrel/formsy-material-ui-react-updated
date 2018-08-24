import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton';

import FormsyComponent from './FormsyComponent';

export class FormsyRadioGroup extends FormsyComponent {
  static propTypes = {
    children: PropTypes.node,
    defaultSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    validationError: PropTypes.string,
    validationErrors: PropTypes.object,
    validations: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  };

  componentDidMount() {
    this.props.setValue(this.muiComponent.getSelectedValue());
  }

  handleValueChange = (event, value) => {
    this.props.setValue(value);
    if (this.props.onChange) this.props.onChange(event, value);
  };

  render() {
    /* eslint no-unused-vars: 0 */
    let {
      defaultSelected,
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
      required,
      resetValue,
      setValidations,
      setValue,
      showError,
      showRequired,
      validationError,
      validationErrors,
      validations,
      value,
      ...rest
    } = this.props;

    // remove unknown props from children
    const children = React.Children.map(this.props.children, radio => {
      const {
        validations, // eslint-disable-line no-unused-vars
        validationError, // eslint-disable-line no-unused-vars
        validationErrors, // eslint-disable-line no-unused-vars
        ...rest
      } = radio.props;

      return React.createElement(RadioButton, rest);
    });

    // For backward compatibility or for
    // users used to MaterialUI, use the "defaultSelected"
    // attribute for the "value" if the value was not
    // explicitly set.
    if (typeof value === 'undefined') {
      value = defaultSelected;
    }

    return (
      <RadioButtonGroup
        disabled={isFormDisabled()}
        {...rest}
        ref={this.setMuiComponentAndMaybeFocus}
        onChange={this.handleValueChange}
        valueSelected={getValue()}
        defaultSelected={value}
      >
        {children}
      </RadioButtonGroup>
    );
  }
}

export default withFormsy(FormsyRadioGroup);
