import { shallow } from 'enzyme';
import Notifications from './Notifications';
import React from 'react';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('test that Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('verify that Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(<NotificationItem />).length).toBe(3);
    });

    it('verify that Notifications renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    });

    it('renders the first Notification element with the correct HTML', () => {
        const wrapper = shallow(<Notifications />);
        const firstNotificationItem = wrapper.find(NotificationItem).at(0);
        expect(firstNotificationItem.props('type')).toBe('default');
        expect(firstNotificationItem.props('value')).toBe('New course available');
    });
});