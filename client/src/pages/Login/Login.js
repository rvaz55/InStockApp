import React, {Component} from "react";
import {Input, FormBtn } from "../../components/Form";
import Profile from ".././Profile";
import  { auth, firebase }  from "../../firebase";
import "./Login.css";

class Login extends Component {
    state = {
        email: "",
        password: "",
        authenticated: false,
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
        console.log(data) 

        auth.doSignInWithEmailAndPassword(data.email, data.password)
        .then((data) => {
          console.log(data.email)
          //this.setState({ ...INITIAL_STATE });
          //history.push(routes.HOME);
          alert('you are signed in!')

            // API.getStore(mongoData)
            // .then(res => 
            //   {let path = `/login`;
            //   this.props.history.push(path)
            //   this.setState({ items: res.data })})
            // .catch(err=>console.log(err))
        })
        .catch(error => {
          alert(error.message);
        });
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
          { this.state.authenticated 
            //If authenticated is true display items below
            ? 
                <Profile storeID={this.state.storeID}>  </Profile>
              
            //If authenticated is false display items below
            : 
            
            <form>
            <p>Enter your email</p>
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
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
                disabled={!(this.state.email && this.state.password)}
                onClick={(e) => this.handleFormSubmit(e,this.state)}
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