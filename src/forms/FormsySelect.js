import React          from 'react';
import PropTypes      from 'prop-types';
import { withFormsy } from 'formsy-react';
import SelectField    from 'material-ui/SelectField';

import FormsyComponent  from './FormsyComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class FormsySelect extends FormsyComponent {
  static propTypes = {
    children:         PropTypes.node,
    name:             PropTypes.string.isRequired,
    onChange:         PropTypes.func,
    requiredError:    PropTypes.string,
    validationError:  PropTypes.string,
    validationErrors: PropTypes.object,
    validations:      PropTypes.oneOfType( [ PropTypes.string, PropTypes.object ] ),
    value:            PropTypes.any,
  };
  
  state = {
    hasChanged: false,
  };
  
  handleChange = ( event, index, value ) => {
    this.props.setValue( value );
    
    this.setState( {
      hasChanged: value !== '',
    } );
    
    if( this.props.onChange ) this.props.onChange( event, value, index );
  };
  
  render(){
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
            ...    rest
          } = this.props;
    
    const raiseError = (showError || showRequired)  && !isPristine && !isValid && isFormSubmitted;
    const errorText = raiseError ? this.getErrors(errorMessage, errorMessages)  : null;
    
    const selectValue = this.state.hasChanged ? value : valueProp;
    
    return (
        <MuiThemeProvider>
          <SelectField
              disabled={ isFormDisabled }
              errorText={ errorText }
              onChange={ this.handleChange }
              ref={ this.setMuiComponentAndMaybeFocus }
              value={ selectValue }
              { ...rest }
          >
            { this.props.children }
          </SelectField>
        </MuiThemeProvider>
    );
  }
}

const WithFormsyFormsySelect = withFormsy( FormsySelect );

export { WithFormsyFormsySelect as FormsySelect };
