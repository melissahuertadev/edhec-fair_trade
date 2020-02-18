import React from 'react';
import { FirebaseContext } from '../Firebase';
import './index.css'


const Peeps = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return  <div class="gallery">
                        <h1>Peeps</h1>
                        <h2 class="desc">Lena Ringwald</h2>
                        <a target="_blank" href="https://i.imgur.com/Es3Dy0t.jpg">
                        <img src="https://i.imgur.com/Es3Dy0t.jpg" alt="Lena" width="600" height="400" />
                        </a>
                        {/* <img src="https://i.imgur.com/Es3Dy0t.jpg" class="gallery" width="276" height="276"/> */}
                        <h2 class="desc">Nabil Ganouni</h2>
                        <a target="_blank" href="https://i.imgur.com/OryYp6o.jpg">
                        <img src="https://i.imgur.com/OryYp6o.jpg" alt="Lena" width="600" height="400" />
                        </a>
                        {/* <img src="https://i.imgur.com/OryYp6o.jpg" class="gallery" width="276" height="276"/> */}
                        <h2 class="desc">Jun Wong</h2>
                        <a target="_blank" href="https://i.imgur.com/ZE2af7t.jpg">
                        <img src="https://i.imgur.com/ZE2af7t.jpg" alt="Lena" width="600" height="400" />
                        </a>
                        {/* <img src="https://i.imgur.com/ZE2af7t.jpg" class="gallery" width="276" height="276"/> */}
                        <h2 class="desc">Veneranda Hernandez</h2>
                        <a target="_blank" href="https://i.imgur.com/ktCW0Jh.jpg">
                        <img src="https://i.imgur.com/ktCW0Jh.jpg" alt="Lena" width="600" height="400" />
                        </a>
                        {/* <img src="https://i.imgur.com/ktCW0Jh.jpg" class="gallery" width="276" height="276"/> */}
                        <h2 class="desc">Melissa Huerta</h2>
                        <a target="_blank" href="https://i.imgur.com/5g7vORS.jpg">
                        <img src="https://i.imgur.com/5g7vORS.jpg" alt="Lena" width="600" height="400" />
                        </a>
                        {/* <img src="https://i.imgur.com/5g7vORS.jpg" class="gallery" width="276" height="276"/> */}

                    </div>
        }}
    </FirebaseContext.Consumer>

);

export default Peeps;

// <div>
            //     <div class="gallery">
                // <a target="_blank" href="ihttps://i.imgur.com/Es3Dy0t.jpg">
                // <img src="ihttps://i.imgur.com/Es3Dy0t.jpg" alt="Lena" width="600" height="400" />
                // </a>
            //     <div class="desc">Lena Ringwald</div>
            //     </div>
            
            //     <div class="gallery">
            //     {/* <a target="_blank" href="ihttps://i.imgur.com/OryYp6o.jpg"> */}
            //     <img src="https://i.imgur.com/OryYp6o.jpg" alt="Nabil" width="600" height="400" />
            //     {/* </a> */}
            //     <div class="desc">Nabil Ganouni</div>
            //     </div>
            
            //     <div class="gallery">
            //     {/* <a target="_blank" href="https://i.imgur.com/ZE2af7t.jpg"> */}
            //     <img src="https://i.imgur.com/ZE2af7t.jpg" alt="June" width="600" height="400" />
            //     {/* </a> */}
            //     <div class="desc">Jun Wong</div>
            //     </div>
            
            //     <div class="gallery">
            //     {/* <a target="_blank" href="https://i.imgur.com/ktCW0Jh.jpg"> */}
            //     <img src="https://i.imgur.com/ktCW0Jh.jpg" alt="Veneranda" width="600" height="400" />
            //     {/* </a> */}
            //     <div class="desc">Veneranda Hernandez</div>
            //     </div>
            //     </div>

            // https://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery_responsive