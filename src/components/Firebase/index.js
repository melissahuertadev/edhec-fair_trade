/* well-encapsulated Firebase module(folder) */
import React from 'react';

/*FirebaseContext is used to provide a Firabase instance
to the app in src/index.js */
import FirebaseContext from './context';
import Firebase from './firebase';

/* const Firebase = () => (
    <div>
        <h1>Firebase</h1>
    </div>
);
 */

export default Firebase;

export { FirebaseContext };