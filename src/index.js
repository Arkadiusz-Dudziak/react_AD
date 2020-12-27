import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

//import App_LoginRegister from './LoginRegisterComp/App_LoginRegister'; //logowanie, rejestracja

//import App_AdminPanel from './AdminPanel/App_KontaPanel';   //panel z kontami uzytkownikow

//import App_ObiektyPanel from './ObiektyPanel/App_ObiektyPanel'

//import App_UserProfile from './UserProfile/App_UserProfile';

import App_Options from './Options/App_Options';


import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App_Options/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
