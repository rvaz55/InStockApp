import React, { Component } from 'react';
//import { Switch, Route } from 'react-router-dom';
import HomeNavbar from "./components/HomeNavbar";
import Main from "./components/Main"
//import SearchBar from "./components/SearchBar";
import FooterPage from "./components/FooterPage";


class App extends Component {
  render() {
    return (
         <div> 
          <HomeNavbar />
          
          <Main />

          <FooterPage />
          </div>
       
       
    
    );
  }
}

export default App;
