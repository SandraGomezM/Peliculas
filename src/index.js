import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase'

firebase.initializeApp(
{
    apiKey: "AIzaSyACEDupMw2JoNFlypJofvhGRZeKUt5DuOk",
    authDomain: "moviesfirebase-133d9.firebaseapp.com",
    databaseURL: "https://moviesfirebase-133d9.firebaseio.com",
    projectId: "moviesfirebase-133d9",
    storageBucket: "moviesfirebase-133d9.appspot.com",
    messagingSenderId: "573952838141"
  }
)

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
