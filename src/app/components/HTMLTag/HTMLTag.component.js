import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { Inject } from '@talend/react-components';
import { cmfConnect } from '@talend/react-cmf';

function HTMLTag({ tag, components, getComponent, ...props }) {
	const injected = Inject.all(getComponent, components);
	const newprops = Object.assign({}, omit(props, cmfConnect.INJECTED_PROPS));
	return React.createElement(tag, newprops, injected('children'));
}

HTMLTag.displayName = 'HTMLTag';
HTMLTag.propTypes = {
	tag: PropTypes.string,
	components: PropTypes.object,
	getComponent: PropTypes.func,
};

export default cmfConnect({})(HTMLTag);
