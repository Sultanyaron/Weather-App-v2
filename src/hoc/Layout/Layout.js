import React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import CoverImg from '../../components/UI/CoverImg/CoverImg';

const Layout = props => {

    return (
        <React.Fragment>
            <CoverImg/>
            <Navigation />
            {/* Pages switcher with Lazy Loading of Favorite component */}
            { props.children }
            <Footer />
        </React.Fragment>
    );
};

export default Layout;