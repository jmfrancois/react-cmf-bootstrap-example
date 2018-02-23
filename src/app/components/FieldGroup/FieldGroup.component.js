import React from 'react';
import PropTypes from 'prop-types';
import {
	FormGroup,
	ControlLabel,
	FormControl,
	HelpBlock,
} from 'react-bootstrap';
import omit from 'lodash/omit';
import { cmfConnect } from '@talend/react-cmf';

function FieldGroup({ id, label, help, ...props }) {
	const newprops = Object.assign({}, omit(props, cmfConnect.INJECTED_PROPS));
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...newprops} />
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}

FieldGroup.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	help: PropTypes.string,
};

export default cmfConnect({})(FieldGroup);
