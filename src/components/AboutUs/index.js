import React from 'react';
import { FirebaseContext } from '../Firebase';

const AboutUs = () => (
   <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                        <h1>About Us</h1>
                      <img src= ""></img>
                    </div>
        }}
    </FirebaseContext.Consumer>
);

export default AboutUs;