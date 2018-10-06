import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "../../pages/Home";
import Profile from "../../pages/Profile"
const Main = () => (
<main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/search' component={ProfilePage}/>
      <Route path='/login' component={SearchBar}/>
      <Route path='/signUp' component={SignUp}/>
      <Route path='/profilePage' component={ProfilePage}/>
    </Switch>
  </main>
);

export default Main;