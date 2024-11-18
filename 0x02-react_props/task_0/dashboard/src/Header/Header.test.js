import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Header />', () => {
    it('verify it renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders an img and h1 tags without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('App-header').length).toBe(1);
    });
})