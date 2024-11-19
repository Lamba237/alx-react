import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(5);
    expect(rows.at(0).prop('textFirstCell')).toBe('Available courses');
    expect(rows.at(1).prop('textFirstCell')).toBe('Course name');
    expect(rows.at(2).prop('textFirstCell')).toBe('ES6');
    expect(rows.at(3).prop('textFirstCell')).toBe('Webpack');
    expect(rows.at(4).prop('textFirstCell')).toBe('React');
  });
});