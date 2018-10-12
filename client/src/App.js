import React, { Component } from 'react';
import AppNavbar from "./components/AppNavbar";
import { Switch, Route } from 'react-router-dom';
import FooterPage from "./components/FooterPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
        <div>
        

        <AppNavbar />
          <Switch >
            <Route  exact path='/' component={Home} />
            <Route path='/search/:searchItem' component={SearchResults} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} /> */}
            <Route path='/profile' component={Profile} />
          </Switch>

          <FooterPage />
        </div>       
      
    );
  }
}

export default App;
