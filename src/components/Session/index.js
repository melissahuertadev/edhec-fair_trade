import React from 'react';
import { FirebaseContext } from '../Firebase';

import AuthUserContext from './context';
//mport withAuthentication from './withAuthentication';
import withAuthorization from './withAuthorization';

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

export { AuthUserContext, withAuthorization};