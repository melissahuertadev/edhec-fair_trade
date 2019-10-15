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

export default FirebaseContext;