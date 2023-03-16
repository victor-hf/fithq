import * as React from 'react';

interface Props {}

const UserSettings: React.FunctionComponent<Props> = (props) => {
    return (
        <div className="flex h-screen">
            <div
                id="side-panel"
                className="mr-12 border shadow-md h-5/6 min-w-[250px] border-slate-300/30 rounded-xl"
            >
                LINKS TO CATEGORIES
            </div>
            <div
                id="settings"
                className="w-full border shadow-md h-5/6 border-slate-300/30 rounded-xl"
            >
                <section>
                    <span>PERSONAL INFO</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                        praesentium eos pariatur facere excepturi voluptatem quia tempora, nostrum
                        quasi officiis iusto, aut omnis exercitationem odit magni mollitia unde
                        magnam sint!
                    </p>
                    <br></br>
                </section>
                <section>
                    <span>ACCOUNT INFO</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                        praesentium eos pariatur facere excepturi voluptatem quia tempora, nostrum
                        quasi officiis iusto, aut omnis exercitationem odit magni mollitia unde
                        magnam sint!
                    </p>
                    <br></br>
                </section>
            </div>
        </div>
    );
};

export default UserSettings;
