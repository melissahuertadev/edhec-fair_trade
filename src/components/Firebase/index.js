/* well-encapsulated Firebase module(folder) */
import React from 'react';

/* FirebaseContext is used to provide a Firabase instance
to the app in src/index.js
 * { withFirebase } import it and then export
 */
import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';

export default Firebase;

export { FirebaseContext, withFirebase };