
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link } from 'react-router-dom';
import Logo from './Logo';


configure({ adapter: new Adapter() });

describe('<Logo />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('should render 1 anchor', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  it('should render 1 h1', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});