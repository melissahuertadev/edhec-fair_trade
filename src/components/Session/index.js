import React from 'react';
import { FirebaseContext } from '../Firebase';

const Session = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                        <h1>Session</h1>
                    </div>
        }}
    </FirebaseContext.Consumer>

);

export default Session;