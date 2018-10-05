import React, {Component} from "react";
import {Input, FormBtn } from "../../components/Form";

class Login extends Component {
    state = {
        username: "",
        password: ""
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
        // alert("Insert code to check database for user password combo");
      };


    render() {
        return (
            <form>
            <p>Enter your username</p>
            <Input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <p>Enter your password</p>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <br></br>
            <FormBtn
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Login to InStock
              </FormBtn>
          </form>
        );
      }
}

export default Login;