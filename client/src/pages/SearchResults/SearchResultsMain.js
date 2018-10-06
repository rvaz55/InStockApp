import React, { Component } from 'react';
import SearchResultsTable from "./SearchResultsTable";
import SearchBar from "../../components/SearchBar";
import SearchButton from "../../components/SearchButton";
import itemSeeds from "../../utilsClient/itemSeedDB";
import { Container, Col, Row } from "../../components/Layout";
import Fuse from 'fuse.js';


class SearchResultsMain extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      searchText: ""
    }
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.searchText) {
      alert("must enter search word");
    }
    else {
      // let tempResults = [];
      
      let options = {
        keys: ['item']
      };
      
      for (var i=0; i<itemSeeds.length; i++) {
        let fuse = new Fuse(itemSeeds, options)
        if(fuse.search(this.state.searchText){
          
        }

      }

      console(search)

      // for (var i = 0; i < itemSeeds.length; i++) {
      //   if (itemSeeds[i].item.toLowerCase().indexOf(this.state.searchText) >= 0) {
      //     tempResults.push(itemSeeds[i])
      //   }
        this.setState({
          results: fuse
        })
      }

      console.log(this.state);
      console.log(itemSeeds)
      // console.log(this.name.searchBar.value);
      // console.log('submitted')
    };
  

  // componentDidMount(){
  //   this.setState({ results: [
  //   ]
  //   })
  // }

  render() {
    return (
      <div className="App">
        <SearchBar onChange={this.handleInputChange} value={this.state.searchText} />
        <SearchButton onClick={this.handleSubmit} />
        <Row>
          <Col size="sm-8">
            <SearchResultsTable results={this.state.results} />
          </Col>
          <Col size="sm-4">
            Map goes here
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchResultsMain;
