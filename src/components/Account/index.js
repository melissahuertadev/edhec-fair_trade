import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
//passwordchangeform is not matched to any route
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';


const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Account: {authUser.email}</h1>
                <p>Forgot password?</p>
                <PasswordForgetForm />
                <br/>
                <p>Want to change password?</p>
                <PasswordChangeForm />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
//const condition = authUser => authUser != null;

export default withAuthorization(condition)(AccountPage);
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