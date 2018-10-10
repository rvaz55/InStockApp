import React, {Component} from "react";
import {Input, FormBtn } from "../../components/Form";
import Profile from ".././Profile";


class Login extends Component {
    state = {
        username: "",
        password: "",
        authenticated: false,
        storeID: ''
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

          <div>
          { this.state.authenticated 
            //If authenticated is true display items below
            ? 
                <Profile storeID={this.state.storeID}>  </Profile>
              
            //If authenticated is false display items below
            : 
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
      
          }
        </div>
      );
           
      }
}

export default Login;