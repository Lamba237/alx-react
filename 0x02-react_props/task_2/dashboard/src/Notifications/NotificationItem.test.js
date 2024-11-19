import React from "react";
import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";

describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper. exists()).toBe(true);
    });
    it('renders the correct html with type and value props', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.find('li').prop('notification-type')).toEqual('default');
        expect(wrapper.text()).toEqual('test');
    });

    it('renders the correct html prop', () => {
        const html = { __html: '<u>test</u>' };
        const wrapper = shallow(<NotificationItem html={html} />);
        expect(wrapper.html()).toContain('<u>test</u>');
    });
});