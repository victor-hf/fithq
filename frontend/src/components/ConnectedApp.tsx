import * as React from 'react';

interface Props {
    logo: string;
    status: 'Active' | 'Paused' | 'Error';
}

const ConnectedApp: React.FunctionComponent<Props> = (props) => {
    let className = 'px-4 py-1 mx-4 text-center border rounded-2xl';

    const activeClassName = ' ' + 'bg-green-500 text-white';
    const pausedClassName = ' ' + 'bg-gray-500 text-white';
    const errorClassName = ' ' + 'bg-red-500 text-white';

    props.status === 'Active' ? (className += activeClassName) : null;
    props.status === 'Paused' ? (className += pausedClassName) : null;
    props.status === 'Error' ? (className += errorClassName) : null;

    return (
        <div className="flex flex-col content-center justify-around w-64 border rounded-md h-44">
            <img className="mx-4" src={props.logo}></img>
            <div className={className}>{props.status}</div>
        </div>
    );
};

export default ConnectedApp;
