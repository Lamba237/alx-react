import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';

describe('<Footer />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });
    it ('renders the text "copyright"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text().toLowerCase()).toContain('copyright');
    });
});