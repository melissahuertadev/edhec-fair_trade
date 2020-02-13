import React from 'react';

import { FirebaseContext } from '../Firebase';

const Admin = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>
                <h1>Admin</h1>
            </div>
        }}
    </FirebaseContext.Consumer>
);

export default Admin;