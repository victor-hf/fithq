import * as React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

interface Props {}

const MainLayout: React.FunctionComponent<Props> = (props) => {
    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default MainLayout;
