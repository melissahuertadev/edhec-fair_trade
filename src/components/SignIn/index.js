import React from 'react';

import { FirebaseContext } from '../Firebase'

const SignIn = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                        <h1> Sign In</h1>
                    </div>
        }}
    </FirebaseContext.Consumer>
);

export default SignIn;