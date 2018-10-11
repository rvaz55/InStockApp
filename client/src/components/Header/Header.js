import React, { Component } from 'react';
import "./Header.css";
import { Mask, View, Container } from 'mdbreact';
import SearchBar from "../SearchBar";
import SearchButton from "../SearchButton";


class Header extends Component {

constructor() {
  super();
  this.state = {
    results: [],
    searchText: ''
  }
}

handleInputChange = event => {
  let value = event.target.value;
  const name = event.target.name;
  this.setState({ [name]: value })
};

handleSubmit = (event, data) => {
  event.preventDefault();
  if (!this.state.searchText) {
    alert("must enter search word");
    }
  else {
    //Line below removes the quotes (") at the beginning and end of the term 
    //it also stringifies the text and replaces spaces with a dash (-)
    //example: "hot cheetos" will become hot-cheetos
    let item =((JSON.stringify(this.state.searchText)).slice(1, -1)).replace(/ /gi, '+');
    let path = `/search/${item}`;
    this.props.history.push(path);
    console.log(this.props) 

    }
  };

  render() {
    return (
// const Header = props => (
  <div>
    <View>
      <Mask overlay="purple-light" style={{ flexDirection: 'column' }} className="flex-center  text-white text-center">
        <h2>InStock App</h2>
        <h5>Some clever slogan here</h5>
        <div className="input-group" id="searchHolder">
          <SearchBar onChange={this.handleInputChange} value={this.state.searchText}/> <SearchButton onClick={this.handleSubmit}/>
        </div>
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
};
};


export default Header;