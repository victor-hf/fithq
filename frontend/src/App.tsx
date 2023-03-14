import * as React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import UserSettings from './pages/UserSettings';
import AppSettingsLayout from './pages/AppSettingsLayout.';
import ConnectedApps from './components/ConnectedApps';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: null,
        children: [
            { path: '/', element: <Home /> },
            { path: 'user', element: <UserSettings /> },
            {
                path: 'settings',
                element: <AppSettingsLayout />,
                children: [
                    { index: true, element: <div>DATA SOURCES</div> },
                    { path: 'data-sources', element: <div>DATA SOURCES</div> },
                    { path: 'connected-apps', element: <ConnectedApps /> },
                ],
            },
            { path: 'about', element: <About /> },
        ],
    },
]);

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <div className="h-full App">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
