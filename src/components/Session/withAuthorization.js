import React from 'react';

import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

/*this method displays the passed component ( "" page) that should be protected by the higher-order component.
 If the authorization fails, the higher-order component redirects to the sign in page.
 If it doesn't fail, the higher-order component does nothing and renders the passed component 
*/
const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                },
            );
        }

        // listener to trigger a callback function every time the authenticated user changes
        componentWillUnmount() {
            this.listener();
        }
        render() {
            return (
                <Component {...this.props}/>
            );
        }
    }

    return compose(
        withRouter,
        withFirebase, 
    )(WithAuthorization);
};

export default withAuthorization;