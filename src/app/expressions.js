import get from 'lodash/get';

function getSettings({ context }, path) {
	let settings = context.store.getState().cmf.settings;
	if (path) {
		settings = { props: { [path]: get(settings, `props.${path}`) }};
	}
	return JSON.stringify(settings, null, 2);
}

function getRegistry({ context}, filter) {
	if (filter) {
		const result = {};
		Object.keys(registry).filter(key => key.startsWith(filter)).forEach(key => {
			result[key] = context.registry[key];
		});
		return result;
	}
	return context.registry;
}

export default {
	getSettings,
	getRegistry,
}
