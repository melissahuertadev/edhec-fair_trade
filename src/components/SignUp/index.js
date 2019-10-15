import React from 'react';

import { FirebaseContext } from '../Firebase';

const SignUp = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                        <h1>SignUp</h1>
                    </div>
        }}
    </FirebaseContext.Consumer>
);

export default SignUp;