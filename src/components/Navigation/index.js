import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AuthUserContext } from '../Session';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

//navigation costumize according to log status
const Navigation = () => (
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? (<NavigationAuth authUser={ authUser } />) : (<NavigationNonAuth />)
            }
        </AuthUserContext.Consumer>    
);

/* const NavigationAuth = ({ authUser }) => (
    <ul>
        <li>
            <Link to ={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ABOUT_US}>About Us</Link>
        </li>
        <li>
            <Link to ={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
            <Link to={ROUTES.PEEPS}>Peeps</Link>
        </li>
        <li>
            <Link to={ROUTES.VOLUNTEER}>Volunteer</Link>
        </li>
        <li>
            <Link class = "nav-link" to={ROUTES.SUPPORT}>Support</Link>
        </li>

        {!!authUser.roles[ROLES.ADMIN] && (
                    <li>
                        <Link class = "nav-link" to={ROUTES.ADMIN}>Admin</Link>
                    </li>
                )} 

        <li>
            <Link class = "nav-link" to={ROUTES.ADMIN}>Admin</Link>
        </li>
        <li>
            <Link class = "nav-link" to={ROUTES.COMMENTS}>realtime</Link>
        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to ={ROUTES.HOME}>Home</Link>
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
    </ul>
);
 */


const NavigationAuth = ({ authUser }) => (
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