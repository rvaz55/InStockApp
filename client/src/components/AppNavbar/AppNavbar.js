import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { Switch } from 'react-router-dom';
import "./AppNavbar.css";

class AppNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div id="nav">
        <header>

          <Switch >

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
                            <NavLink to="/login">Login</NavLink>
                          </NavItem>
      
                          <NavItem >
                            <NavLink to="/signup" >Create Account</NavLink>
                          </NavItem>
                      
                    </NavbarNav>
                    
                  </Collapse>

            </Navbar>

          </Switch>

         
        </header>
      
      </div>


    );
  }
}

export default AppNavbar;






