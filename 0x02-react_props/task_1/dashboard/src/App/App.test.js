import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('<App />', () => {
    it('contains the Notifications component', () => {
        const wrapper = shallow(App);
        expect(wrapper.containsMatchingElement(<Notifications />)).to.equal(true);
    });

    it('contains the Header component', () => {
        const wrapper = shallow(App);
        expect(wrapper.containsMatchingElement(<div className="App"><Header /></div>)).to.equal(true);
    });

    it('contains the Login component', () => {
        const wrapper = shallow(App);
        expect(wrapper.containsMatchingElement(<div className="App-body"><Login /></div>)).to.equal(true);
    });

    it('contains the Footer component', () => {
        const wrapper = shallow(App);
        expect(wrapper.containsMatchingElement(<div className="App-footer"><Footer /></div>)).to.equal(true);
    });
});