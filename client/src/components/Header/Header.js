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
      let item = ((JSON.stringify(this.state.searchText)).slice(1, -1)).replace(/ /gi, '+');
      let path = `/search/${item}`;
      this.props.history.push(path);
    }
  };

  render() {
    return (
      // const Header = props => (
      <div>
        <View>
          <Mask overlay="purple-light" style={{ flexDirection: 'column' }} className="flex-center  text-white text-center">
            <h2>InStock</h2>
            <h5>Helping you find unique pantry products in your area</h5>
            <div className="input-group" id="searchHolder">
              <SearchBar onChange={this.handleInputChange} value={this.state.searchText} /> <SearchButton onClick={this.handleSubmit} />
            </div>
          </Mask>
        </View>

        <Container className="text-center my-5 center-first">

          <div className="row">
            <div className="col-1">

            </div>
            <div className="col-10">
              <h3 className="display-4">Find products near you in minutes.</h3>
              <h3 className="h4-responsive bold-content">No more searching all over town.</h3>
            </div>
            <div className="col-1">

            </div>
          </div>

        </Container>


        <div className="container-fluid-middle">
          <div className="row">
            <div className="col-1">
            </div>
            <div className="col-10">
              <h2 className="h2-responsive font-weight-normal color-row">Are you a local business interested in increasing your customer base? </h2>
            </div>
            <div className="col-1">
            </div>

          </div>
        </div>


        <div className=" container-fluid vendor-title">

          <h1 className="display-4" >Using InStock is easy! </h1>

        </div>

        {/* <hr className="my-4" /> */}



        <Container className="text-center my-5 instructions">

          <div className="row">
            <div className="col-sm">
              <i className="fa fa-2x fa-edit deep-purple-text"></i>
              <h3 className="h3-responsive font-weight-bold">Sign Up</h3>
              <h4 className="h4-responsive font-weight-normal">Create an account on InStock and add your store information</h4>
            </div>
            <div className="col-sm">
              <i className="fa fa-2x fa-th-list deep-purple-text"></i>
              <h3 className="h3-responsive font-weight-bold">Log In</h3>

              <h4 className="h4-responsive font-weight-normal">Add the inventory of product(s) from your local business</h4>
            </div>
            <div className="col-sm">
              <i className="fa fa-2x fa-search deep-purple-text"></i>
              <h3 className="h3-responsive font-weight-bold">Search</h3>

              <h4 className="h4-responsive font-weight-normal"> Consumers will be able to easily search and buy items from you! </h4>
            </div>
          </div>

        </Container>

      </div>
    )
  };
};


export default Header;