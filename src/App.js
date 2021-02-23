import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import UserPage from './components/pages/UserPage';
import Button from './components/Button';
import LogOutButton from './components/LogOutButton';
import AccountHolder from './components/AccountHolder';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();



function App() {
  
  return (
    <>
    <Router>
      <Navbar />
      
      <Switch>
        <Route path='/' exact component=
        {Home} />
        <Route path='/login' exact component=
                {Login} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
