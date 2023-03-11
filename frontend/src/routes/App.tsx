import * as React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} />
        </Routes>
    );
};

export default App;
