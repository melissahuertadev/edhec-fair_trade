import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class passwordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE};
    }

    onSubmit = event => {
        const { passwordOne } = this.state;

        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid = 
            passwordOne !== passwordTwo || passwordOne === '';
        
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="new password"
                />
                <input 
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="confirm new password"
                />
                <button disabled={isInvalid} type="submit">
                    Reset password
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(passwordChangeForm);

/*import { FirebaseContext } from '../Firebase';

const PasswordChange = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                        <h1>PasswordChange</h1>
                    </div>
        }}
    </FirebaseContext.Consumer>
);

export default PasswordChange; */