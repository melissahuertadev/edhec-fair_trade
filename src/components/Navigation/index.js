import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import * as ROUTES from '../../constants/routes';

import { FirebaseContext } from '../Firebase';

const Navigation = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <Navbar bg="dark" variant="dark">
                        <Nav className="nav-item">
                            <Link class = "nav-link" to ={ROUTES.HOME}>Home</Link>
                            <Link class = "nav-link" to={ROUTES.ABOUT_US}>About Us</Link>
                            <Link class = "nav-link" to ={ROUTES.ACCOUNT}>Account</Link>
                            <Link class = "nav-link" to ={ROUTES.ADMIN}>Admin</Link>
                            <Link class = "nav-link" to={ROUTES.SIGN_IN}>Sign In</Link>
                        </Nav>  
                    </Navbar>
        }}
    </FirebaseContext.Consumer>
   
);

export default Navigation;