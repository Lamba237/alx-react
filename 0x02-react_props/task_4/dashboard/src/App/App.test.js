import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Notifications />)).toBe(true);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<div className="App"><Header /></div>)).toBe(true);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<div className="App-body"><Login /></div>)).toBe(true);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<div className="App-footer"><Footer /></div>)).toBe(true);
  });

  it('does not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<CourseList />)).toBe(false);
  });

  describe('when isLoggedIn is true', () => {
    it('does not include the Login component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.containsMatchingElement(<Login />)).toBe(false);
    });

    it('includes the CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.containsMatchingElement(<CourseList />)).toBe(true);
    });
  });
});