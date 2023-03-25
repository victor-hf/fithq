import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

interface Props {
    to: string;
    innerHTML?: string;
    type?: 'side-panel';
}

const className = 'px-2 text-lg border rounded-lg hover:bg-slate-300 focus:ring focus:bg-slate-300';

const NavLinkCustom: React.FunctionComponent<Props> = (props) => {
    const navigate = useNavigate();
    return (
        <button
            className={className}
            onClick={() => {
                navigate(props.to);
            }}
        >
            {props.innerHTML}
        </button>
    );
};

export default NavLinkCustom;
