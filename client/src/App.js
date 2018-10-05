import React, { Component } from 'react';
import HomeNavbar from "./components/HomeNavbar";
import SearchBar from "./components/SearchBar";
import FooterPage from "./components/FooterPage";





class App extends Component {
  render() {
    return (
         <div> 
        <HomeNavbar />
     
          <SearchBar />

          <FooterPage />
          </div>
       
       
    
    );
  }
}

export default App;
