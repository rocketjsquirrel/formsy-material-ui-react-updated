import React from 'react';
import { withFormsy } from 'formsy-react';
import RadioButton from 'material-ui/RadioButton';

export class FormsyRadio extends React.Component {
  render() {
    return <RadioButton {...this.props} />;
  }
}

export default withFormsy(FormsyRadio);
