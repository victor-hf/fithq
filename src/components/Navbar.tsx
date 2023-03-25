import React from 'react';
import logo from '../assets/svgs/cube-transparent.svg';
import userCircle from '../assets/svgs/user-circle.svg';
import settings from '../assets/svgs/cog-8-tooth.svg';
import { NavLink } from 'react-router-dom';

interface Props {}

export const Navbar: React.FC<Props> = () => {
    return (
        <nav className="flex items-center justify-between w-screen h-20 px-12 shadow-md ">
            <div className="flex items-center [&>*]:mr-4">
                <NavLink to={'/'}>
                    <img src={logo} alt="user-avatar" className="w-10 hover:animate-spin" />
                </NavLink>
                <div>fitHQ</div>
            </div>
            <div className="flex [&>*]:ml-4">
                <NavLink to={'user'}>
                    <img src={userCircle} alt="user-avatar" className="w-10 hover:animate-pulse" />
                </NavLink>
                <NavLink to={'settings'}>
                    <img src={settings} alt="user-settings" className="w-10 hover:animate-spin" />
                </NavLink>
            </div>
        </nav>
    );
};
