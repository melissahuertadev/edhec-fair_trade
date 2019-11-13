import React from 'react';

import { FirebaseContext } from '../Firebase';

const Home = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>
                        <h1>Home</h1>
                    </div>
        }}
    </FirebaseContext.Consumer>
);

export default Home;