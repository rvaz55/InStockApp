import React, { Component } from 'react';
import AppNavbar from "./components/AppNavbar";
import { Switch, Route } from 'react-router-dom';
import FooterPage from "./components/FooterPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";
import { Provider } from 'react-redux';
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        

        <AppNavbar />
          <Switch >
            <Route  exact path='/' component={Home} />
            <Route path='/search' component={SearchResults} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} /> */}
            <Route path='/profile' component={Profile} />
          </Switch>

          <FooterPage />
        </div>       
      </Provider>

    );
  }
}

export default App;
