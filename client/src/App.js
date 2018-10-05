import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeNavbar from "./components/HomeNavbar";
import SearchBar from "./components/SearchBar";
import FooterPage from "./components/FooterPage";
import Login from "./pages/Login";


class App extends Component {
  render() {
    return (
         <div> 
          <HomeNavbar />
  
          <Switch>
             <Route exact path='/' component={SearchBar}/>
             <Route exact path="/login" component={Login}/>
          </Switch>

          <FooterPage />
          </div>
       
       
    
    );
  }
}

export default App;
