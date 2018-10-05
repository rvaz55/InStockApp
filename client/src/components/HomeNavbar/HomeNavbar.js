import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, Mask, View } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import "./HomeNavbar.css";

class HomeNavbar extends React.Component {
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
      <div>
        <header>
          <Router>
            <Navbar color="transparent" dark expand="md" fixed="top" scrolling>
              <NavbarBrand href="/">
                <strong>Home</strong>
              </NavbarBrand>
              {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
              <Collapse isOpen={this.state.collapse} navbar>
                <NavbarNav left>

                  <NavItem active>
                    <NavLink to="#">About</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="#">Login</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="#">Create Account</NavLink>
                  </NavItem>
                  
                </NavbarNav>
              </Collapse>
            </Navbar>
          </Router>

          <View>
            <Mask overlay="purple-light" style={{ flexDirection: 'column' }} className="flex-center  text-white text-center">
              <h2>InStock App</h2>
              <h5>Some clever slogan here</h5>
              <p>.....</p>
            </Mask>
          </View>
        </header>
        <Container className="text-center my-5">

          <div className="row">
            <div className="col-6">
              Text about how to use website here 
              </div>
            <div className="col-6">
            Text about how to use website here 
              </div>
          </div>
        </Container>
      </div>


    );
  }
}

export default HomeNavbar;






