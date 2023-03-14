import * as React from 'react';
import { Outlet } from 'react-router-dom';
import NavLinkCustom from '../components/NavLinkCustom';

interface Props {}

const AppSettingsLayout: React.FunctionComponent<Props> = (props) => {
    return (
        <div className="flex w-screen h-screen my-6 ">
            <div
                id="side-panel"
                className="mx-12 border shadow-md h-5/6 min-w-[250px] border-slate-300/30 rounded-xl"
            >
                <nav className="flex flex-col p-4 [&>*]:my-2">
                    <NavLinkCustom to={'data-sources'} innerHTML="Data sources" type="side-panel" />
                    <NavLinkCustom
                        to={'connected-apps'}
                        innerHTML="Connected apps"
                        type="side-panel"
                    />
                </nav>
            </div>
            <div id="settings" className="max-w-5/6">
                <Outlet />
            </div>
        </div>
    );
};

export default AppSettingsLayout;
