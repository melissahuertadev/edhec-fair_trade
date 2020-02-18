import React from 'react';
//import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import Navigation from '../Navigation';
import AboutUsPage from '../AboutUs';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import PeepsPage from '../Peeps';
import VolunteerPage from '../Volunteer';
import SupportPage from '../Support';
import CommentBoxPage from '../CommentBox';
import CommentsPage from '../Comments';
import PostsPage from '../Posts';
import AddPostPage from '../AddPost';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
    <Router>
        <Navigation />
        <hr />
        <div style={{ padding: "60px 60px", textAlign: "center", color: "grey"}}>
            <Route exact path={ROUTES.ABOUT_US} component={AboutUsPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.PEEPS} component={PeepsPage} />
            <Route path={ROUTES.VOLUNTEER} component={VolunteerPage} />
            <Route path={ROUTES.SUPPORT} component={SupportPage} />
            <Route path={ROUTES.COMMENT_BOX} component={CommentBoxPage} />
            <Route path={ROUTES.COMMENTS} component={CommentsPage} />
            <Route path={ROUTES.POSTS} component={PostsPage} />
            <Route path={ROUTES.ADDPOST} component={AddPostPage} />
        </div>
    </Router>
);


export default withAuthentication(App);