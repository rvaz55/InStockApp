import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import { auth } from "../../firebase";
import API from "../../utilsClient/routesClient";
import { Jumbotron, NavLink } from 'mdbreact';
import Logo from "../../Instock.png";
import "./Login.css";


/*note by Austin Plumly: todo...
create logic on the home page to detect if the user is logged in using local storage
	if logged in display the correct info on the nav bar.
	get the correct id of the user and store in state accordingly.

remove the create account button if user is logged in. 

 */


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class Login extends Component {

    state = {
        email: '',
        storeID: '',
        error: '',
        hasError: false,
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
                  const newState = 
                  {
                    ...this.state.currentStore,
                    ...res.data
                  }
                this.setState(newState)
                localStorage.email=data.email
                localStorage.password=data.password
                localStorage.loggedIn=true;
                localStorage.loginData=JSON.stringify(res.data);
                //console.log(this.state)
                //console.log(this.state.storeID)
                //console.log(this.state._id)
                
                let path = `/profilepage/${this.state._id}`;
                this.props.history.push(path)
                })
             .catch(res=>console.log('happpens in this part'))
        })
        .catch(error => {
          this.setState(byPropKey('error', error))
        });
    };
    

  render() {

    const error = this.state.error.message
    console.log(error)

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
          <img src={Logo} alt="InStock Logo"/>
            <h1 className="h1-responsive display-4">Log In</h1>
            <hr className="my-4" />
            <p className="lead text-grey">New to InStock? <NavLink to="/signup">Sign Up</NavLink></p>


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
              
            {/* This error message needs to be styled */}
              <p>{error}</p>

            </form>
          </div>

        
      </div>
    );

  }
}

export default Login;