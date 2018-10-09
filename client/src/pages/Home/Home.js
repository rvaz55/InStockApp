import React, { Component } from 'react';
import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import "./Home.css";


class Home extends Component {
  render() {
    return (
      <div className="home-page page">
        <Header />

        <SearchBar />


      </div>



    );
  }
}


export default Home;