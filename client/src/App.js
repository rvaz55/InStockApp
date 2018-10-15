import React, { Component } from 'react';
import AppNavbar from "./components/AppNavbar";
import { Switch, Route } from 'react-router-dom';
import FooterPage from "./components/FooterPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import SearchResults from "./pages/SearchResults";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    userLoggedIn: false,
    storeID: '',
    email: ''
  }

  setUserLoggedIn = (loggedIn) => {
    this.setState({
      userLoggedIn: loggedIn
    })
  }

  setStoreID = (storeID) => {
    this.setState({
      storeID: storeID
    })
  }

  setEmail = (email) => {
    this.setState({
      email : email 
    })
  }

  render() {
    return (

      <div>


        <AppNavbar
          userLoggedIn={this.state.userLoggedIn}
          setUserLoggedIn={this.setUserLoggedIn}
        />
        <Switch >
          <Route exact path='/' component={Home} />
          <Route path='/search/:searchItem' component={SearchResults} />
          <Route path='/search' component={SearchResults}/>
          <Route path='/login' render={(props) => (
            <Login
              history={props.history}
              setUserLoggedIn={this.setUserLoggedIn}
              setStoreID={this.setStoreID}
              setEmail={this.setEmail}
            />
          )} />
          <Route path='/signup' component={SignUp} />
          <Route path='/about' component={About} />

          <Route path='/profilepage/:storeID' render={(props) => (
            <Profile
              history={props.history}
              setUserLoggedIn={this.setUserLoggedIn}
              setStoreID={this.setStoreID}
              setEmail={this.setEmail}
              storeID = {props.match.params.storeID}
              userLoggedIn={this.state.userLoggedIn}/>
              
          )}  />

          <Route component={NoMatch} />
        </Switch>

        <FooterPage />
      </div>


    );
  }
}

export default App;
