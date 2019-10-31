import React from 'react';


export const backdrop = (props) => (
    props.show ? <div className='backdrop' onClick={props.clicked}></div> : null
);

export default backdrop;