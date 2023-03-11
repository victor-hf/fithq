import * as React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
    return (
        <div className="App">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
