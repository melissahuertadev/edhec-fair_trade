import React from 'react';
import { FirebaseContext } from '../Firebase';

const PasswordChange = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                        <h1>PasswordChange</h1>
                    </div>
        }}
    </FirebaseContext.Consumer>
);

export default PasswordChange;