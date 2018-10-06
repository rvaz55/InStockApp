import React, { Component } from 'react';
import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header"



class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <SearchBar />


      </div>



    );
  }
}


export default Home;