import React from 'react';
import { FirebaseContext } from '../Firebase';

const SignOut = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                        <h1>SignOut</h1>
                    </div>
        }}
    </FirebaseContext.Consumer>
);

export default SignOut;