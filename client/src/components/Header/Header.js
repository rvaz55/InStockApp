import React from "react";
import "./Header.css";
import { Mask, View, Container } from 'mdbreact';




const Header = props => (
  <div>
    <View>
      <Mask overlay="purple-light" style={{ flexDirection: 'column' }} className="flex-center  text-white text-center">
        <h2>InStock App</h2>
        <h5>Some clever slogan here</h5>
        <p>.....</p>
      </Mask>
    </View>

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
)




export default Header;