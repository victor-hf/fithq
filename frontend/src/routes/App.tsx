import * as React from 'react';
import { Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import About from '../pages/About';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: null,
        children: [{ path: '/', element: <Home /> }],
    },
    { path: 'about', element: <About /> },
]);

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
