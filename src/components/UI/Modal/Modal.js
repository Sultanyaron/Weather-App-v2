import React from 'react';
import Backdrop from './Backdrop/Backdrop';

const Modal = ({ children, show, clicked }) => {
  return (
    <>
      <Backdrop
        show={show}
        clicked={clicked}
      />
      <div
        className="modal"
        style={{
          transform: show ? 'translate(-50% , 0)' : 'translate(-50% , -100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;