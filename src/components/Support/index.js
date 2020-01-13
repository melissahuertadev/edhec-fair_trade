import React from 'react';

import { FirebaseContext } from '../Firebase';

const Support = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return (
            <div>
                <h1>Costumer Support</h1>
                <p>
                    IF you have any issues or questions please fill the form below and we will contact you about your issue or concerns.
                </p>
                <form class="ui form">
                <div class="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div class="field">
                    <label>email</label>
                    <input type="text" name="email" placeholder="email" />
                </div>
                <h4>Message</h4>
                <div class="ui form">
                <div class="field">
                    <textarea></textarea>
                </div>
                </div>
            <br />
            <br />
                <button class="ui button" type="submit">Submit</button>
                </form>
            </div>
            )
        }
    }
    </FirebaseContext.Consumer>
);

export default Support;