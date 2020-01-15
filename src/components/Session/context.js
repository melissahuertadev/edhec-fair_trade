/*Passing the authenticated user from the App component to interested parties.
 using the React Context API to pass down the Firebase instance.
*/

import React from 'react';

const AuthUserContext = React.createContext(null);

export default AuthUserContext;