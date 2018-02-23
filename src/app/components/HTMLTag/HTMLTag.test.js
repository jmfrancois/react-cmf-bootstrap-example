import React from 'react';
import { shallow } from 'enzyme';

import HTMLTag from './HTMLTag.component';

describe('HTMLTag', () => {
	it('should render', () => {
		const wrapper = shallow(
			<HTMLTag />
		);
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
