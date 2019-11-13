/* Connect Firebase with React World
import Firebase instance (created with the Firebase class)
*/

import React from 'react';

/*createContext function creates 2 components:
-Provider:  provide a Firebase instance once at the top-level
 of the React component tree,
-Consumer:  retrieve the Firebase instance if it is needed in
 the React component*/
const FirebaseContext = React.createContext(null);

/*Using a higher-order component instead of using a render prop component,
 * then made it able in Firebase/index.js
 */
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;