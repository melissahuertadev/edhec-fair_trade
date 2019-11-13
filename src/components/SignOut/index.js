import React from 'react';

import { withFirebase } from '../Firebase';

/* changing FirebaseContext to withFirebase
 * import { FirebaseContext } from '../Firebase';
 */

const SignOutButton = ({ firebase }) => (
    <button type="button" onClick={firebase.doSignOut}>
        Sign Out
    </button>
);

export default withFirebase(SignOutButton);