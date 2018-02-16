import React from 'react';
import { shallow } from 'enzyme';

import Grid from './Grid.component';

describe('Grid', () => {
	it('should render', () => {
		const wrapper = shallow(
			<Grid />
		);
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
