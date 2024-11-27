import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });

  it('renders the first NotificationItem element with the correct HTML', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const firstNotificationItem = wrapper.find(NotificationItem).at(0);
    expect(firstNotificationItem.prop('type')).toBe('default');
    expect(firstNotificationItem.prop('value')).toBe('New course available');
  });

  it('displays the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').text()).toBe('Your notifications');
  });

  it('does not display div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  it('displays the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').text()).toBe('Your notifications');
  });

  it('displays div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });

  it('renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
    let wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem).length).toBe(1);
    expect(wrapper.find(NotificationItem).at(0).prop('value')).toBe('No new notification for now');

    wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).length).toBe(1);
    expect(wrapper.find(NotificationItem).at(0).prop('value')).toBe('No new notification for now');
  });

  it('renders the correct number of NotificationItem elements when listNotifications is passed', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('does not display "Here is the list of notifications" when listNotifications is empty, but displays "No new notification for now"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find(NotificationItem).at(0).prop('value')).toBe('No new notification for now');
  });
});