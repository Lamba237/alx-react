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

  it('renders correctly if you pass an empty array or if you don’t pass the listCourses property', () => {
    let wrapper = shallow(<CourseList listCourses={[]} />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(3);
    expect(rows.at(0).prop('textFirstCell')).toBe('Available courses');
    expect(rows.at(1).prop('textFirstCell')).toBe('Course name');
    expect(rows.at(2).prop('textFirstCell')).toBe('No course available yet');

    wrapper = shallow(<CourseList />);
    const rowsWithoutProp = wrapper.find(CourseListRow);
    expect(rowsWithoutProp).toHaveLength(3);
    expect(rowsWithoutProp.at(0).prop('textFirstCell')).toBe('Available courses');
    expect(rowsWithoutProp.at(1).prop('textFirstCell')).toBe('Course name');
    expect(rowsWithoutProp.at(2).prop('textFirstCell')).toBe('No course available yet');
  });

  it('renders the correct number of CourseListRow elements when listCourses is passed', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(5);
    expect(rows.at(0).prop('textFirstCell')).toBe('Available courses');
    expect(rows.at(1).prop('textFirstCell')).toBe('Course name');
    expect(rows.at(2).prop('textFirstCell')).toBe('ES6');
    expect(rows.at(3).prop('textFirstCell')).toBe('Webpack');
    expect(rows.at(4).prop('textFirstCell')).toBe('React');
  });
});