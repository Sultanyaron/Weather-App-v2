import React from 'react';
import celcius from '../../../assets/images/celsius.svg';
import fahrenheit  from '../../../assets/images/fahrenheit.svg'
import { useDispatch, useSelector } from 'react-redux'; 
import * as actions from '../../../store/actions/rootActions';

const TempCheckBox = props => {
    const dispatch = useDispatch();
    const metric = useSelector((state) => state.userSettings.metric);
    const onChangeTemp = () => dispatch(actions.changeTemp());


    const changeTempHandler = () => {
        onChangeTemp();
    };

    let tempSignPath =  celcius;

    if ( !metric ) {
        tempSignPath = fahrenheit;
    };

    return (
        <div className="tempCheckBox" onClick={changeTempHandler}>
            <p className='tempCheckBox__title'>Temperature</p>
            <img className='tempCheckBox__img' src={tempSignPath} alt='Temp Selector'></img>
        </div>
    );
};

export default TempCheckBox;