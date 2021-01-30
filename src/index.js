import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import "./commonUse.css"

//import AppUserProfile from './UserProfile/AppUserProfile';

//import AppObiektyPanel from './ObiektyPanel/AppObiektyPanel'

//import AppLoginRegister from './LoginRegister/AppLoginRegister'; //logowanie, rejestracja

import AppKontaPanel from './AdminPanel/AppKontaPanel'; //panel z kontami uzytkownikow

//import AppOptions from './Options/AppOptions';     


import * as serviceWorker from './serviceWorker';


ReactDOM.render(<AppKontaPanel/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
