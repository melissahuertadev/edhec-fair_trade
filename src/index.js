import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

/* Firebase is instantiated once and is injected
via Reacts Context API to React's component tree */
import Firebase, { FirebaseContext } from './components/Firebase';


ReactDOM.render(
    <FirebaseContext.Provider value ={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
