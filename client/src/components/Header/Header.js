import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./Header.css";
import { Mask, View, Container } from 'mdbreact';
import SearchBar from "../SearchBar";
import SearchButton from "../SearchButton";
import Logo from "../../Instock.png";
import HeaderImg from "../../headerImg.jpg";


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
      <div id="search-header">
        <View src={HeaderImg}>
          <Mask overlay="purple-light" style={{ flexDirection: 'column' }} className="flex-center  text-white text-center">
            <img src={Logo} />
            <h5>Buying locally made easier</h5>
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
              <h3 className="display-4">Find unique products near you in minutes.</h3>
              <h3 className="h4-responsive text-center font-weight-bold">No more searching all over town.</h3>
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
              <h1 className="h2-responsive display-4 color-row">Connecting communities with local businesses </h1>
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

            <div className="col-md-4 mb-md-0 mb-5">

              <div className="row">

                <div className="col-lg-2 col-md-3 col-2">
                  <i className="fa fa-2x fa-edit blue-text"></i>
                </div>

                <div className="col-lg-10 col-md-9 col-10">
                  <h3 className="h3-responsive font-weight-bold">Sign Up</h3>
                  <p className="h4-responsive">Are you a local business owner?</p>

                  <p className="h4-responsive">Simply create an account </p>
                  <Link to={"/signup"} activeClassName="active"><button className="btn btn-deep-purple">Sign Up</button></Link>

                </div>

              </div>

            </div>

            <div className="col-md-4 mb-md-0 mb-5">

              <div className="row">

                <div className="col-lg-2 col-md-3 col-2">
                  <i className="fa fa-2x fa-th-list pink-text"></i>
                </div>

                <div className="col-lg-10 col-md-9 col-10">
                  <h3 className="h3-responsive font-weight-bold">Log In</h3>
                  <p className="h4-responsive extra-space">Add products from your local business</p>
                  <br></br>
                  

                  <p className="h4-responsive"></p>

                  
               
                  <Link to={"/login"} activeClassName="active"><button className="btn btn-deep-purple">Log In</button></Link>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="row">

                <div className="col-lg-2 col-md-3 col-2">
                  <i className="fa fa-2x fa-search purple-text"></i>
                </div>

                <div className="col-lg-10 col-md-9 col-10">
                  <h3 className="h3-responsive font-weight-bold">Search</h3>
                  <p className="h4-responsive "> Users will be able to easily search and find products from your business! </p>
                  {/* <Link to={"/search"} href="#serach-header" activeClassName="active"><button className="btn btn-deep-purple">Search</button></Link> */}

                </div>

              </div>

            </div>

          </div>

        </Container>

      </div>
    )
  };
};


export default Header;