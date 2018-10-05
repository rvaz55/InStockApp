import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";

class SignUp extends Component {
    state = {
        store: "",
        address: "",
        zipcode: "",
        phone: "",
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
    };


    render() {
        return (
            <form>
                <p>Store name</p>
                <Input
                    type="text"
                    placeholder="Store Name"
                    name="store"
                    value={this.state.store}
                    onChange={this.handleInputChange}
                />
                <p>Store address</p>
                <Input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleInputChange}
                />
                <p>City, State</p>
                <Input
                    type="text"
                    placeholder="City, State"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleInputChange}
                />
                <p>ZIP Code</p>
                <Input
                    type="text"
                    placeholder="ZIP Code"
                    name="zipcode"
                    value={this.state.zipcode}
                    onChange={this.handleInputChange}
                />
                <p>Store Phone Number</p>
                <Input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={this.state.phone}
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
                    disabled={!(this.state.store 
                        && this.state.address 
                        && this.state.city 
                        && this.state.zipcode 
                        && this.state.phone
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