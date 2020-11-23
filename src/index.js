import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

//import App_LoginRegister from './LoginRegisterComp/App_LoginRegister'; //logowanie, rejestracja

//import App_AdminPanel from './AdminPanel/App_AdminPanel'; //rozwijane listy, nie pobiera dobrze za pierwszym razem wybranej wartości 

import App_ObiektyPanel from './ObiektyPanel/App_ObiektyPanel'

//import App from './AdminPanelMDB/App'; //skomplikowane, krotkie, nie działa


import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App_ObiektyPanel/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
