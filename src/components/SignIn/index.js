import React from 'react';

import { FirebaseContext } from '../Firebase'

const SignIn = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                        <h1> SIGN IN</h1>
                    </div>
        }}
    </FirebaseContext.Consumer>
);

export default SignIn;