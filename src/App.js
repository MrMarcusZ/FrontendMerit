import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Button from './components/Button';
import LogOutButton from './components/LogOutButton';
import AccountHolder from './components/AccountHolder';
import { useAuth0 } from '@auth0/auth0-react';




function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (
    <>
    <Router>
      <Navbar />
      <AccountHolder />
      <Switch>
        <Route path='/' exact component=
        {Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
