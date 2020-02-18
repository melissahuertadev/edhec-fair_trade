import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AuthUserContext } from '../Session';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

//navigation costumize according to log status
const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
             authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>    
    </div>
);

const NavigationAuth = () => (
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
                    <Link class = "nav-link" to={ROUTES.PEEPS}>Peeps</Link>
                </li>
                <li>
<<<<<<< Updated upstream
                    <Link class = "nav-link" to={ROUTES.PEEPS}>Peeps</Link>
=======
                    <Link class = "nav-link" to={ROUTES.VOLUNTEER}>Volunteer</Link>
                </li>
                <li>
                    <Link class = "nav-link" to={ROUTES.SUPPORT}>Support</Link>
                </li>
                <li>
                    <Link class = "nav-link" to={ROUTES.COMMENT_BOX}>Comments</Link>
                </li>
                <li>
                    <Link class = "nav-link" to={ROUTES.ADMIN}>Admin</Link>
>>>>>>> Stashed changes
                </li>
                <li>
                    <SignOutButton />
                </li>
            </Nav>  
        </div>
    </Navbar>
);

const NavigationNonAuth = () => (
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
                    <Link class = "nav-link" to={ROUTES.SIGN_IN}>Sign In</Link>
                </li>
                <li>
                    <Link class = "nav-link" to={ROUTES.PEEPS}>Peeps</Link>
                </li>
                <li>
                    <Link class = "nav-link" to={ROUTES.VOLUNTEER}>Volunteer</Link>
                </li>
            </Nav>  
        </div>
    </Navbar>
);


export default Navigation;