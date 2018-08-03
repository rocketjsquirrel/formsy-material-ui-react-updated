import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import Checkbox from 'material-ui/Checkbox';

import FormsyComponent from './FormsyComponent';

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
		const {
			defaultChecked, // eslint-disable-line no-unused-vars
			validations, // eslint-disable-line no-unused-vars
			validationErrors, // eslint-disable-line no-unused-vars
			validationError,
			isFormDisabled,
			getValue, // eslint-disable-line no-unused-vars
			...rest
		} = this.props;
		let value = getValue();

		if (typeof value === 'undefined') {
			value = typeof defaultChecked !== 'undefined' ? defaultChecked : false;
		}
		return (
			<Checkbox
				disabled={isFormDisabled()}
				{...rest}
				checked={value}
				onCheck={this.handleChange}
				ref={this.setMuiComponentAndMaybeFocus}
			/>
		);
	}
}

export default withFormsy(FormsyCheckbox);
