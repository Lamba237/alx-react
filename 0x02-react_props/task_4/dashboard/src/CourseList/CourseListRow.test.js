import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find('th').prop('colSpan')).toBe('2');
    expect(wrapper.find('th').text()).toBe('Header');
  });

  it('renders two cells when textSecondCell is present and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />);
    const thElements = wrapper.find('th');
    expect(thElements).toHaveLength(2);
    expect(thElements.at(0).text()).toBe('Header1');
    expect(thElements.at(1).text()).toBe('Header2');
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell1" textSecondCell="Cell2" />);
    const tdElements = wrapper.find('td');
    expect(tdElements).toHaveLength(2);
    expect(tdElements.at(0).text()).toBe('Cell1');
    expect(tdElements.at(1).text()).toBe('Cell2');
  });
});