import React from 'react';
import { FirebaseContext } from '../Firebase';

const PasswordForget = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                        <h1>PasswordForget</h1>
                    </div>
        }}
    </FirebaseContext.Consumer>
);

export default PasswordForget;