import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

//import { FirebaseContext } from '../Firebase';

const Navigation = () => (
    <Navbar bg="dark" variant="dark">
        <div>
            <Nav className="nav-item">
                <li>
                    <Link class = "nav-link" to ={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                    <Link class = "nav-link" to={ROUTES.ABOUT_US}>About Us</Link>
                </li>
                <li>
                    <Link class = "nav-link" to ={ROUTES.ACCOUNT}>Account</Link>
                </li>
                <li>
                    <Link class = "nav-link" to ={ROUTES.ADMIN}>Admin</Link>
                </li>
                <li>
                    <Link class = "nav-link" to={ROUTES.SIGN_IN}>Sign In</Link>
                </li>
                <li>
                    <SignOutButton />
                </li>
            </Nav>  
        </div>
    </Navbar>
);

export default Navigation;