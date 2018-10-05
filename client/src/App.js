import React, { Component } from 'react';
import AppNavbar from "./components/AppNavbar";
//import SearchBar from "./components/SearchBar";
import FooterPage from "./components/FooterPage";
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProfilePage from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";






class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />


        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={SearchResults} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/profilepage' component={ProfilePage} />
        </Switch>

        <FooterPage />
      </div>



    );
  }
}

export default App;
