import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";

class SignUp extends Component {
    state = {
        storeName: "",
        storeAddress: "",
        storeCity: "",
        storeState: "",
        storeZip: "",
        storePhone: "",
        username: "",
        password: "",
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

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.storeName
            && this.state.storeAddress
            && this.state.storeCity 
            && this.state.storeState
            && this.state.storeZip
            && this.state.storePhone
            && this.state.username
            && this.state.password
            && this.state.email) {
            API.saveStore({
                store: this.state.storeName,
                address: this.state.storeAddress,
                city: this.state.storeCity,
                state: this.state.storeState,
                zipcode: this.state.storeZip,
                phone: this.state.storePhone,
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            })
            //.then()
        }

    };


    render() {
        return (
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
                    name="password"
                    value={this.state.password}
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
                        && this.state.password 
                        && this.state.email)}
                    onClick={this.handleFormSubmit}
                >
                    Sign Up for InStock
              </FormBtn>
            </form>
        );
    }
}

export default SignUp;