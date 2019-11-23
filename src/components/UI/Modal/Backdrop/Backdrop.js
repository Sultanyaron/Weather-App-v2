import React from 'react';


export const backdrop = ({ show, clicked }) => (
  show && <div className="backdrop" onClick={clicked} />
);

export default backdrop;