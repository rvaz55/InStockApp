import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import  { auth, firebase }  from "../../firebase";
import {Jumbotron, NavLink} from "mdbreact";
import Logo from "../../Instock.png";
import API from "../../utilsClient/routesClient";
import "./SignUp.css";


class SignUp extends Component {
    state = {
        storeName: "",
        storeAddress: "",
        storeCity: "",
        storeState: "",
        storeZip: "",
        storePhone: "",
        username: "",
        passwordOne: "",
        passwordTwo:"",
        email: ""

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
        console.log(data)
         if (
              (this.state.storeName
              && this.state.storeAddress
              && this.state.storeCity 
              && this.state.storeState
              && this.state.storeZip
              && this.state.storePhone
              && this.state.username
              && this.state.passwordOne
              && this.state.passwordTwo
              && this.state.email)
              &&
              (this.state.passwordOne == this.state.passwordTwo)
             ) {
                //console.log(data)
                auth.doCreateUserWithEmailAndPassword(data.email, data.passwordOne)
                .then(authUser => {
                        console.log(authUser)
                        console.log(data)
                        API.saveStore(data)
                        .then(console.log(data))
                        .catch(error => console.log(error))
                    let path = `/login`;
                    this.props.history.push(path)
                  })
                .catch(error => {console.log(error)} )
       
        } else {
                           
        //Here we need to put an else statemet that triggers 
        //some errors to tell the vendor:
        // A)The passwords don't match
        // B) The username and/or email already exists

            console.log("error")
        }


    };


    render() {
        return (
            <div className="parent-container">
            <div className="signup-form"> 
             <div className="jumbotron-title">
          <Jumbotron>
          <img src={Logo} />

            <h1 className="h1-responsive display-4">Sign Up</h1>
            <h5 className="h5-responsive">Share products from your local business</h5>
            <hr className="my-4" />
            <p className="lead">Already on InStock?<NavLink to="/login">Login</NavLink></p>


          </Jumbotron>
        </div>
            <form>
                <p></p>
                <Input
                    type="text"
                    placeholder="Store Name"
                    name="storeName"
                    value={this.state.storeName}
                    onChange={this.handleInputChange}
                />
                <p></p>
                <Input
                    type="text"
                    placeholder="Address"
                    name="storeAddress"
                    value={this.state.storeAddress}
                    onChange={this.handleInputChange}
                />
                <p></p>
                <Input
                    type="text"
                    placeholder="City"
                    name="storeCity"
                    value={this.state.storeCity}
                    onChange={this.handleInputChange}
                />
                <p></p>
                <Input
                    type="text"
                    placeholder="State"
                    name="storeState"
                    value={this.state.storeState}
                    onChange={this.handleInputChange}
                />
                <p></p>
                <Input
                    type="text"
                    placeholder="ZIP Code"
                    name="storeZip"
                    value={this.state.storeZip}
                    onChange={this.handleInputChange}
                />
                <p></p>
                <Input
                    type="text"
                    placeholder="Phone Number"
                    name="storePhone"
                    value={this.state.storePhone}
                    onChange={this.handleInputChange}
                />
                <p></p>
                <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <p></p>
                <Input
                    type="password"
                    placeholder="Password"
                    name="passwordOne"
                    value={this.state.passwordOne}
                    onChange={this.handleInputChange}
                />
                <p></p>
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    name="passwordTwo"
                    value={this.state.passwordTwo}
                    onChange={this.handleInputChange}
                />
                <p></p>
                <Input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
                <br></br>
                <div className="signup-submit">
                <FormBtn 
                    disabled={!(this.state.storeName
                        && this.state.storeAddress 
                        && this.state.storeCity 
                        && this.state.storeState 
                        && this.state.storeZip 
                        && this.state.storePhone 
                        && this.state.username 
                        && this.state.passwordOne
                        && this.state.passwordTwo 
                        && this.state.email)}
                        //onClick = {this.handleFormSubmit}
                     onClick={(e) => this.handleFormSubmit(e,this.state)}
                >
                    Sign Up for InStock
              </FormBtn>
              </div>
            </form>
            
            </div>
            </div>
        );
    }
}

export default SignUp;