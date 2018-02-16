import React from 'react';
import { cmfConnect } from '@talend/react-cmf';
import { Inject } from '@talend/react-components';

function App({ getComponent, components, ...props}) {
	/**
	 * Instanciate all global components here
	 * Ex : we register @talend/react-components <IconsProvider />
	 * so that all icons are available in each view
	 */
	const injected = Inject.all(getComponent, components);
	return (
		<div>
			{injected('children')}
			{props.children}
		</div>
	);
}

App.propTypes = {
	children: React.PropTypes.element,
};

export default cmfConnect({})(App);
