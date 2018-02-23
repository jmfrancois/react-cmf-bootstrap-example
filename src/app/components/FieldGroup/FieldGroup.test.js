import React from 'react';
import { shallow } from 'enzyme';

import FieldGroup from './FieldGroup.component';

describe('FieldGroup', () => {
	it('should render', () => {
		const wrapper = shallow(
			<FieldGroup />
		);
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
