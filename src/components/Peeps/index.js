import React from 'react';
import { FirebaseContext } from '../Firebase';


const Peeps = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div>
                        <h1>Peeps</h1>
                        <h2>Lena Ringwald</h2>
                        <img src="https://i.imgur.com/Es3Dy0t.jpg" width="276" height="276"/>
                        <h3>Nabil Ganouni</h3>
                        <img src="https://i.imgur.com/OryYp6o.jpg" width="276" height="276"/>
                        <h4>Jun Wong</h4>
                        <img src="https://i.imgur.com/ZE2af7t.jpg" width="276" height="276"/>
                        <h5>Veneranda Hernandez</h5>
                        <img src="https://i.imgur.com/ktCW0Jh.jpg" width="276" height="276"/>
                        <h6>Melissa Huerta</h6>
                        <img src="https://i.imgur.com/5g7vORS.jpg" width="276" height="276"/>

                    </div>
        }}
    </FirebaseContext.Consumer>

);

export default Peeps;