import React from 'react';
import { FirebaseContext } from '../Firebase';

const Landing = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                        <h1>Landing</h1>
                    </div>
        }}
    </FirebaseContext.Consumer>
);

export default Landing;