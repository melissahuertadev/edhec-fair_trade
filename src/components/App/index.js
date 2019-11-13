import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';


import Navigation from '../Navigation';
import AboutUsPage from '../AboutUs';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import { FirebaseContext } from '../Firebase';

const App = () => (
    <FirebaseContext>
        {firebase => {
            return  <Router>
                        <Navigation/>
                        <hr />
                        <div style={{ padding: "60px 60px", textAlign: "center", color: "grey"}}> 
                            <header>EDHEC FAIRTRADE PROJECT</header>
                            <Route exact path={ROUTES.ABOUT_US} component={AboutUsPage} />
                            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                            <Route path={ROUTES.HOME} component={HomePage} />
                            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                            <Route path={ROUTES.ADMIN} component={AdminPage} />
                        </div>
                   
                    </Router>
        }}
    </FirebaseContext>
);

export default App;