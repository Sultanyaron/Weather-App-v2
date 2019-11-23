
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';


configure({ adapter: new Adapter() });

describe('<NavLinks />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<NavLinks />);
  });

  it('should render 1 ul', () => {
    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('should render 2 NavLinks', () => {
    expect(wrapper.find(NavLink)).toHaveLength(2);
  });
});
