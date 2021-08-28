import React from 'react';
import './App.css';
import Login from './components/login'
import Register from './components/register'
import Forgot_Password from './components/forgot_password'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';


function App() {
  return (
    <Container maxWidth="m1">
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/forgot_password" exact component={Forgot_Password}/>
      </Switch>
    </BrowserRouter>
    </div>
    </Container>   
  );
}

export default App;
