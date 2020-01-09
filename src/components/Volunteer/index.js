import React from 'react';
import { FirebaseContext } from '../Firebase';


const Volunteer = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                <img src="https://imgur.com/MpMcldj"/>
                    </div>
        }}
    </FirebaseContext.Consumer>

);

export default Volunteer;