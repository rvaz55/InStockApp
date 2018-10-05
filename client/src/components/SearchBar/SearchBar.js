import React from "react";
import { Switch, Route } from 'react-router-dom';

const SearchBar = () => (
<div>
   
<Switch>
  <Route exact path='/' component={Search}/>
  <Route exact path='/searchBar' component={Search}/>
  <Route path='/searchBar/:itemName' component={Player}/>
</Switch>



  </div>
);

export default SearchBar;
