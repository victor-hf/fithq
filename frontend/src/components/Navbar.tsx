import React from 'react';
import logo from '../assets/svgs/cube-transparent.svg';
import userCircle from '../assets/svgs/user-circle.svg';
import settings from '../assets/svgs/cog-8-tooth.svg';

interface Props {}

export const Navbar: React.FC<Props> = () => {
    return (
        <nav className="absolute top-0 left-0 flex items-center justify-between w-screen h-20 px-12  shadow-md">
            <div className="flex items-center [&>*]:mr-4">
                <div>
                    <img src={logo} alt="user-avatar" className="w-10 hover:animate-spin" />
                </div>
                <div>fitHQ</div>
            </div>
            <div className="flex [&>*]:ml-4">
                <div>
                    <img src={userCircle} alt="user-avatar" className="w-10 hover:animate-pulse" />
                </div>
                <div className="h-full ">
                    <img src={settings} alt="user-settings" className="w-10 hover:animate-spin" />
                </div>
            </div>
        </nav>
    );
};
