import React from 'react';
import { FirebaseContext } from '../Firebase';

const AboutUs = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>
                        <h1>Home</h1>
                        <ul>
							<li>
								<h3>Lena Ringwald</h3>
								<br /> <img src="https://i.imgur.com/Es3Dy0t.jpg" width="276" height="276" />
							</li>
							<li>
								<h3>Nabil Ganouni</h3>
								<br /><img src="https://i.imgur.com/OryYp6o.jpg" width="276" height="276" />
							</li>
							<li>
								<h3>Jun Wong</h3>
								<br /><img src="https://i.imgur.com/ZE2af7t.jpg" width="276" height="276" />
							</li>
							<li>
								<h3>Veneranda Hernandez</h3>
								<br /><img src="https://i.imgur.com/ktCW0Jh.jpg" width="276" height="276" />
							</li>
							<li>
								<h3>Melissa Huerta</h3>`
								<br /><img src="https://i.imgur.com/5g7vORS.jpg" width="276" height="&quot;276/" />
							</li>
							<li>
								<h3>Trinh Mary Nguyen</h3>
								<br /><img src="https://i.imgur.com/gPZGgj0.jpg" width="276" height="&quot;276/" />
							</li>
						</ul>
                    </div>
        }}
    </FirebaseContext.Consumer>
);
//const AboutUs = () => (
//   <FirebaseContext.Consumer>
//        {firebase => {
//            return  <div>
//                        <h1>About Us</h1>
//                    </div>
//        }}
//    </FirebaseContext.Consumer>
//);

export default AboutUs;