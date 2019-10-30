import React from 'react';
import Backdrop from './Backdrop/Backdrop';

const Modal = props => {
    return (
        <React.Fragment>
            <Backdrop 
                show={props.show}
                clicked={props.clicked}/>
            <div 
                className='modal'
                style={{
                    transform: props.show ? 'translate(-50% , 0) ' : 'translate(-50% , -100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            

            </div>
        </React.Fragment>
    );
};

export default Modal;