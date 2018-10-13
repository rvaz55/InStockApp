import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { Switch } from 'react-router-dom';
import "./AppNavbar.css";

class AppNavbar extends React.Component {
    state = {
      collapse: false,
      isWideEnough: false,
    }

  onClick() { 
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  onClickLogout = (e) => {
    console.log(this.props);
    e.preventDefault();
    // console.log('')
    this.props.setUserLoggedIn(false)
  }

  render() {
    console.log(this.props)
    return (
      <div id="nav">
        <header>          

            <Navbar color="transparent" dark expand="md" fixed="top" scrolling>
              
                    <NavbarBrand href="/">
                      <strong>Home</strong>
                    </NavbarBrand>
      
                  {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                  <Collapse isOpen={this.state.collapse} navbar>
                    
                    <NavbarNav left>
      
                          <NavItem >
                            <NavLink to="/about">About</NavLink>
                          </NavItem>

                          <NavItem>
                            {(this.props.userLoggedIn)
                            ? <NavLink to="/login" onClick={this.onClickLogout}>Logout</NavLink>
                            : <NavLink to="/login">Login</NavLink>} 
                          </NavItem>

                          
      
                          <NavItem >
                            <NavLink to="/signup" >Create Account</NavLink>
                          </NavItem>
                      
                    </NavbarNav>
                    
                  </Collapse>

            </Navbar>


         
        </header>
      
      </div>


    );
  }
}

export default AppNavbar;






