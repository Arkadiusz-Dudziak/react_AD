import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App_1 from './Components/App_1';
import App_2 from './AdminPanel/App_2';
import './indexAP.css'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App_2/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
