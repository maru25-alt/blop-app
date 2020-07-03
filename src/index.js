import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/index'
import setAuthorizationToken from './store/actions/authorization'
import { setCurrentUser , getAuthor} from './store/actions/AuthActions';
import {createDatabase} from './store/actions/createdb'
import jwt from 'jsonwebtoken'

//store.dispatch(createDatabase);

if(localStorage.jwtToken){
   console.log('token available')
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
    store.dispatch(getAuthor(jwt.decode(localStorage.jwtToken).author_id))
}
ReactDOM.render(
   <Provider store={store}>
      <App />
  </Provider >

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
