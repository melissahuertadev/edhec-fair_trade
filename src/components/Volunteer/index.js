import React from 'react';
import { FirebaseContext } from '../Firebase';

const Volunteer = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                <h1>DONATE</h1>
                <img src="https://lh3.googleusercontent.com/G_Lw21Pd75z0SKRmPWtaCwT_Yy6_-UEox8UDq7Zi6qgPsF49s5uyBeNilgrXl1JbriKe=s170" alt="volunteer"/>
                </div>
        }}
    </FirebaseContext.Consumer>

);

export default Volunteer;