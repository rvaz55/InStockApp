import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import  { auth, firebase }  from "../../firebase";
import "./SignUp.css";
import API from "../../utilsClient/routesClient";

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
            <div className="signup-form"> 
            <form>
                <p>Store name</p>
                <Input
                    type="text"
                    placeholder="Store Name"
                    name="storeName"
                    value={this.state.storeName}
                    onChange={this.handleInputChange}
                />
                <p>Store address</p>
                <Input
                    type="text"
                    placeholder="Address"
                    name="storeAddress"
                    value={this.state.storeAddress}
                    onChange={this.handleInputChange}
                />
                <p>City</p>
                <Input
                    type="text"
                    placeholder="City"
                    name="storeCity"
                    value={this.state.storeCity}
                    onChange={this.handleInputChange}
                />
                <p>State</p>
                <Input
                    type="text"
                    placeholder="State"
                    name="storeState"
                    value={this.state.storeState}
                    onChange={this.handleInputChange}
                />
                <p>ZIP Code</p>
                <Input
                    type="text"
                    placeholder="ZIP Code"
                    name="storeZip"
                    value={this.state.storeZip}
                    onChange={this.handleInputChange}
                />
                <p>Store Phone Number</p>
                <Input
                    type="text"
                    placeholder="Phone Number"
                    name="storePhone"
                    value={this.state.storePhone}
                    onChange={this.handleInputChange}
                />
                <p>Enter a username</p>
                <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <p>Enter a password</p>
                <Input
                    type="password"
                    placeholder="Password"
                    name="passwordOne"
                    value={this.state.passwordOne}
                    onChange={this.handleInputChange}
                />
                <p>Confirm password</p>
                <Input
                    type="password"
                    placeholder="Password"
                    name="passwordTwo"
                    value={this.state.passwordTwo}
                    onChange={this.handleInputChange}
                />
                <p>Enter an email address</p>
                <Input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
                <br></br>
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
            </form>
            
            </div>
        );
    }
}

export default SignUp;