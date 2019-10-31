import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const Layout = props => {
    return (
        <React.Fragment>
            <Navigation />
            { props.children }
            <Footer />
        </React.Fragment>
    );
};

export default Layout;