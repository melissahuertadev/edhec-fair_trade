import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null,
            };
        }

        componentDidMount() {
            this.listener = this.props.firebase.onAuthUserListener(
                authUser => {
                    this.setState({ authUser });
                },
                () => {
                    this.setState({ authUser: null});
                },
            );

            /*
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (authUser) {
                        this.props.firebase
                            .user(authUser.uid)
                            .once('value')
                            .then(snapshot => {
                                const dbUser = snapshot.val();

                                //empty roles
                                if (!dbUser.roles) {
                                    dbUser.roles = {};
                                }
                                
                                //auth and user from firebase
                                authUser = {
                                    uid: authUser.uid,
                                    email: authUser.email,
                                    ...dbUser,
                                };

                                this.setState({ authUser });
                            });
                    } else {
                        this.setState( { authUser: null } );
                    }

                }
            );
                    */

                    /*
                    authUser
                     ? this.setState({ authUser })
                     : this.setState({ authUser: null }); */

        }

        componentWillUnmount() {
            this.listener()
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />;
                </AuthUserContext.Provider>
            );
        }
    }
    return withFirebase(WithAuthentication);
};

export default withAuthentication;