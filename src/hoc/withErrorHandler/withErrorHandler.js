import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import useHttpErrorHook from '../../hooks/http-error-handler/http-error-handler'

const withErrorHandler = (WrappedComponent, axios) => {
    return (props) => {
        const [error, clearError] = useHttpErrorHook(axios); 

        let errorMessage = null;
        if (error) {
            errorMessage = (
                <div className='errorHandler'>
                    <p className='errorHandler__title'>Error occurred</p>
                    <p className='errorHandler__message'>{error.message}, please try again in few minutes</p>
                </div>
            );
        };
        return (
            <React.Fragment>
                <Modal 
                    show={error}
                    clicked={clearError}>
                    {errorMessage}
                </Modal>
                <WrappedComponent error={error} {...props}/>
            </React.Fragment>
        );
    };
};

export default withErrorHandler;