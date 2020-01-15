import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';

//passwordchangeform is not matched to any route
import PasswordChangeForm from '../PasswordChange';


const AccountPage = () => (
    <div>
        <h1>Account Page</h1>
        <p>Forgot password?</p>
        <PasswordForgetForm />
        <br/>
        <p>Want to change password?</p>
        <PasswordChangeForm />
    </div>
);

export default AccountPage;
/*
const Account = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>
                        <h1>Account</h1>
                    </div>;
        }}
    </FirebaseContext.Consumer>
);

export default Account;
*/