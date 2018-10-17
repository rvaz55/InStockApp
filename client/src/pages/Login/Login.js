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
        storeID: '',
        error: null,
        stockedItems:[]
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
          let email = data.email

             API.getStore(email)
             .then(res => 
                { //console.log( res )
                  // this.setState({
                  //     userLoggedIn: true, 
                  //     storeID: res.data._id, 
                  //     email: res.data.email,
                  //     stockedItems: res.data.stockedItems})
                  const newState  = {
                    ...this.state.currentStore,
                    ...res.data
                }
                this.setState(newState)
                //console.log(this.state)
                //console.log(this.state.storeID)
                //console.log(this.state._id)
                
                let path = `/profilepage/${this.state._id}`;
                this.props.history.push(path)
                })
             .catch(res=>console.log(res))
        })
        .catch(error => {console.log(error);});
      };


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