import * as React from 'react';
import ConnectedApp from './ConnectedApp';
import { connectedApps } from '../mockData';

interface Props {}

const ConnectedApps: React.FunctionComponent<Props> = (props) => {
    return (
        <div className="flex flex-wrap justify-start [&>*]:mb-10 [&>*]:mr-10">
            {connectedApps.map((connectedApp) => {
                return (
                    <ConnectedApp
                        status={
                            connectedApp.status === 'Active' || connectedApp.status === 'Paused'
                                ? connectedApp.status
                                : 'Error'
                        }
                        logo={connectedApp.logo}
                    />
                );
            })}
            {/* <DataSource logo="+" /> */}
        </div>
    );
};

export default ConnectedApps;
