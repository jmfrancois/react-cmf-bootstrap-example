import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cmfConnect } from '@talend/react-cmf';
import { Inject } from '@talend/react-components';
import { toText } from '../../wrap';

function Grid({ getComponent, components, ...props}) {
	const injected = Inject.all(getComponent, components);
	const className = classNames(props.col, {
		container: props.container,
		row: props.row,
	});

	return (
		<div className={className} role={props.container && 'main'}>
			{toText(props)}
			{props.pre && <pre>{props.pre}</pre>}
			{injected('children')}
		</div>
	);
}

Grid.propTypes = {
	name: PropTypes.string,
};

export default cmfConnect({})(Grid);
