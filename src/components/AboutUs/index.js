import React from 'react';
import { FirebaseContext } from '../Firebase';

const AboutUs = () => (
   <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                        <h1>About Us</h1>
                        <img src="https://picsum.photos/id/425/959/635"/>
                    </div>
        }}
    </FirebaseContext.Consumer>
);

export default AboutUs;