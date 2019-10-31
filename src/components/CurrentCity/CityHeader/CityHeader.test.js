
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CityHeader from './CityHeader';
import FavoriteHeart from '../../UI/FavoriteHeart/FavoriteHeart';
configure({adapter: new Adapter()});

describe('<CityHeader />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<CityHeader />)
    });

    it('should render cityHeader', () => {
        expect(wrapper.find('header')).toHaveLength(1);
    });

    it('should render 4 divs', () => {
        expect(wrapper.find('div')).toHaveLength(4);
    });
    
    it('should render ,<FavoriteHeart />', () => {
        expect(wrapper.find(FavoriteHeart)).toHaveLength(1);
    });
});
