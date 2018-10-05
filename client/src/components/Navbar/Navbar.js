import React from "react";
import { Switch, Route } from 'react-router-dom';

const NavBar = () => (
<div>
   
<Switch>
  <Route exact path='/' component={Search}/>
  <Route path='/search/:itemName' component={Player}/>
  <Route exact path='/login' component={Search}/>
  <Route exact path='/signUp' component={Search}/>
</Switch>


  </div>
);

export default NavBar;
