import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeNavbar from "./components/HomeNavbar";
import SearchBar from "./components/SearchBar";
import FooterPage from "./components/FooterPage";


class App extends Component {
  render() {
    return (
         <div> 
          <HomeNavbar />
  
          <Switch>
             <Route exact path='/' component={SearchBar}/>
          </Switch>

          <FooterPage />
          </div>
       
       
    
    );
  }
}

export default App;
