//Page, form and link(used on the sign in page)

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

//Replacing FirebaseContext, because it doesnt need the firebase instance
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
    <div> 
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

//form for capturing the user information, the initial
//state will be use to reset the state after a sign up too.

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    /*this class method will pass the form data to the Firebase
      authentication API via interface in the Firebase class.
      
      If the request resolves sucessfully, component'state will be set
      to its initial state - If the request is rejected, it runs to the
      catch block and set the error object in the local state.
      
      The preventDefault() method prevents a reload of the browser
    */
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                //user in firebase db
                return this.props.firebase
                 .user(authUser.user.uid)
                 .set({
                    username, email,
                  });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                 //redirecting after succesful signup
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
               
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value } );
    };
    
    //each input field gets a value from the local state and updates
    //the value in the local state with the onChange handler
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            /* controlled components */
            <form onSubmit={this.onSubmit}>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Type your full Name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Type your email"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Set your password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm your password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

//compose: organize the high-order components
const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };