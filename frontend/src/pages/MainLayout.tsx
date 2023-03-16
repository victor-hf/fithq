import * as React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

interface Props {}

const MainLayout: React.FunctionComponent<Props> = (props) => {
    return (
        <>
            <Navbar />
            <div id="main-container" className="w-screen h-screen px-12 mt-6">
                <Outlet />
            </div>

            {/* <Footer /> */}
        </>
    );
};

export default MainLayout;
