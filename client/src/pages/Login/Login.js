import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import Profile from ".././Profile";
import { auth, firebase } from "../../firebase";
import API from "../../utilsClient/routesClient";
import { Jumbotron, NavLink } from 'mdbreact';

import "./Login.css";

class Login extends Component {

    state = {
        email: '',
        password: '',
        storeID: '',
        error: null
    };
    
    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;
    
        // Set the state for the appropriate input field
        this.setState({
          [name]: value
          });
      };

      handleFormSubmit = (event, data) => {
        event.preventDefault();
        //console.log(data) 
        //console.log(this.props.history)

        auth.doSignInWithEmailAndPassword(data.email, data.password)
        .then((authUser) => {
          //console.log(authUser)
          //console.log(data)
          //console.log(data.email)

             API.getStore(data.email)
             .then(res => 
                { //console.log( res )
                  this.setState({
                      userLoggedIn: true, 
                      storeID: res.data._id, 
                      email: res.data.email})
                  let path = `/profilepage/${this.state.storeID}`;
                  this.props.history.push(path)
                })
             .catch(err=>console.log(err))
        })
        .catch(error => {console.log(error);});
      };

  // componentWillMount() {
  //   this.confirmCredentials();
  // }

  //confirmCredentials = () => {
  // API.confirmCredentials()
  //   .then(res =>
  //     this.setState({ storeID: res.data, authenticated: "true" })
  //   )
  //   .catch(err => console.log(err));

  //   console.log(this.props.history)
  //   let storeID =(JSON.stringify(this.state.storeID)).slice(1, -1);
  //   let path = `/profile/${storeID}`;
  //   this.props.history.push(path);
  //   console.log(this.props)
  // };


  render() {
    return (

      <div className="login-form">
       {/* { this.state.userLoggedIn 
            //If authenticated is true display items below
            ? 
                <Profile history={this.props.history} storeID={this.state.storeID}> </Profile>
              
            //If authenticated is false display items below
            :  */}
        <div className="jumbotron-title">
          <Jumbotron>
            <h1 className="h1-responsive display-4">Log In to InStock</h1>
            <hr className="my-4" />
            <p className="lead">New to InStock? <NavLink to="/signup">Sign Up</NavLink></p>


          </Jumbotron>
        </div>
      
          <div className="login">

            <form>
              <p></p>
              <Input
                type="text"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <p></p>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <br></br>
              <div className="submit-button">
              <FormBtn
              
                disabled={!(this.state.email && this.state.password)}
                onClick={(e) => this.handleFormSubmit(e, this.state)}
              >
            
              </FormBtn>
              </div>
            </form>
          </div>

        
      </div>
    );

  }
}

export default Login;