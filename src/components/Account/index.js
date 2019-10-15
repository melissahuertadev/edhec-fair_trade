import React from 'react';

import { FirebaseContext } from '../Firebase';

const Account = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>
                        <h1>Account</h1>
                    </div>;
        }}
    </FirebaseContext.Consumer>
);

export default Account;