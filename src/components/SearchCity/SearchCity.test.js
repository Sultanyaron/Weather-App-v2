
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchCity from './SearchCity';
import AutoCompleteInput from './AutCompleteInput/AutoCompleteInput';
import SearchResults from './SearchResults/SearchResults';

configure({ adapter: new Adapter() });

describe('<SearchCity />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<SearchCity />);
  });

  it('should render 1 AutoCompleteInput', () => {
    expect(wrapper.find(AutoCompleteInput)).toHaveLength(1);
  });

  it('should render 1 SearchResults', () => {
    expect(wrapper.find(SearchResults)).toHaveLength(1);
  });
});