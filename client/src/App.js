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

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});



class App extends Component {
  
  state = {
    userLoggedIn: false,
    storeID: '',
    email: '', 
    stockedItems: [],
    price: null,
    category:''
  }

  setUserLoggedIn = (loggedIn) => {
    this.setState(byPropKey(
      'userLoggedIn', loggedIn
    ))
  }

  setStoreID = (storeID) => {
    this.setState(byPropKey(
      'storeID', storeID
    ))
  }

  setEmail = (email) => {
    this.setState(byPropKey(
      'email' , email 
    ))
  }

  render() {
    
    if(localStorage.loggedIn=='true'&&this.state.userLoggedIn==false)
    {
      let loginData = JSON.parse(localStorage.loginData)
      this.setState({
        userLoggedIn: true,
        storeID: loginData._id,
        email: loginData.email, 
        stockedItems: [],
        price: null,
        category:''
      })
    }
    
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
