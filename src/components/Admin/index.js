import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import * as ROLES from '../../constants/roles';
import { withAuthorization } from '../Session';

class AdminPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true });

        //on() method registers a continuous listener that triggers every time something has changed
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const { users, loading } = this.state;

        return (
            <div>
                <h1>Admin</h1>
                {loading && <div>Loading ...</div>}
                <UserList users={users} />
                
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
        );
    }
}

const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
                <span>
                    <strong>ID:</strong> {user.uid}
                </span>
                <span>
                    <strong>E-mail:</strong> {user.email}
                </span>
                <span>
                    <strong>Username:</strong> {user.username}
                </span>
            </li>
        ))}
    </ul>
);

/*
const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

export default withAuthorization(condition)(Admin);
*/
export default withFirebase(AdminPage);