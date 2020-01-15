import React from 'react';

import * as ROLES from '../../constants/roles';
import { withAuthorization } from '../Session';

const Admin = () => (
    /*<FirebaseContext.Consumer>
        {firebase => {
            return (
                */
            <div>
                <h1>Admin</h1>
                <p>Restricted area! Only users with the admin rola are authorized</p>
                
                <div class="ui vertical menu">
                <div class="item">
                    <div class="header">Products</div>
                    <div class="menu">
                    <a class="item">Product1</a>
                    <a class="item">Product2</a>
                    <a class="item">Product3</a>
                    <a class="item">Product4</a>
                    <a class="item">Product5</a>
                    </div>
                </div>
                <div class="item">
                    <div class="header">Partnerships</div>
                    <div class="menu">
                    <a class="item">Company1</a>
                    <a class="item">Company2</a>
                    <a class="item">Company3</a>
                    <a class="item">Company4</a>
                    <a class="item">Company5</a>
                    </div>
                </div>
                <div class="item">
                    <div class="header">Authorized Employees</div>
                    <div class="menu">
                    <a class="item">User1</a>
                    <a class="item">User2</a>
                    <a class="item">User3</a>
                    <a class="item">User4</a>
                    <a class="item">User5</a>
                    </div>
                </div>
                <div class="item">
                    <div class="header">Payment Methods</div>
                    <div class="menu">
                    <a class="item">Payment1</a>
                    <a class="item">Payment2</a>
                    <a class="item">Payment3</a>
                    <a class="item">Payment4</a>
                    <a class="item">Payment5</a>
                    </div>
                </div>
                <div class="item">
                    <div class="header">Settings</div>
                    <div class="menu">
                    <a class="item">Add/Delete Products</a>
                    <a class="item">Add/Delete Company</a>
                    <a class="item">Add/Delete Employees</a>
                    <a class="item">Edit My Payment Methods</a>
                    <a class="item">Edit My Info</a>
                    </div>
                </div>
                <div class="item">
                    <div class="header">Support</div>
                    <div class="menu">
                    <a class="item">E-mail Support</a>
                    <a class="item">FAQs</a>
                    </div>
                </div>
                </div>
            </div>
       /* )
        }
    }
    </FirebaseContext.Consumer>*/
);
/*
const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

export default withAuthorization(condition)(Admin);
*/
export default Admin;