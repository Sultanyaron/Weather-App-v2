import React from 'react';


const Footer = () => {
    console.log('Footer RENDER');
    return (
        <div className='footer'>
            <p className='footer__title'>Developed by Yaron Sultan - 2019</p>
            <div className='footer__media'>
                <a className='footer__icon footer__icon--linkedin' href='https://www.linkedin.com/in/yaron-sultan-b52bb9164/'>&nbsp;</a>
                <a className='footer__icon footer__icon--github' href='https://github.com/Sultanyaron'>&nbsp;</a>
            </div>
        </div>
    );
};

export default Footer;
