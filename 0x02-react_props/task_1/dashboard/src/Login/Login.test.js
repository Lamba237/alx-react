import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

describe('<Login />', () => {
    it('test if it renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });

    it('components render 2 input tag and 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toBe(2);
        expect(wrapper.find('label')).toBe(2);
    });
});