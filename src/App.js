import React , {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';
import DeliverHeader from './DeliverHeader';

const promise=loadStripe(
  'pk_test_51HKs9xJUnzEG91biGUiQ7VjTzAfteXPWqCddv5MZT7OwhlXo9clKt8w1ZMMiaWD9NgBKHDWi7uZ89HxkAa4atS0i00P0kQ19C5'
  );



function App() {
  const [{}, dispatch] =useStateValue();

    useEffect(() => {
      //will only run when the app compenent loads...
      auth.onAuthStateChanged(authUser => {

        console.log('THE USER IS ',authUser)
        if(authUser){

          dispatch({
            type: 'SET_USER',
            user: authUser
          })

        }else{
          //the user is logged down
          dispatch({
            type: 'SET_USER',
            user: null
          })

        }

      })


    }, [])


  return (
    <Router>
      <div className="app">
      
        <Switch>

        <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/orders">
            <Header/>
            <Orders/>
        </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/">
            <Header/>
            <DeliverHeader/>
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
