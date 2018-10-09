import React, { Component } from 'react';
import SearchResultsTable from "./SearchResultsTable";
import SearchBar from "../../components/SearchBar";
import SearchButton from "../../components/SearchButton";
import itemSeeds from "../../utilsClient/itemSeedDB";
import { Container, Col, Row } from "../../components/Layout";
import { Link} from 'react-router-dom';
import ColumnForResultCards from "../../components/Layout";
import "./SearchResults.css";
// import Fuse from 'fuse.js';
// import Map from "./MapHolder";


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
      let tempResults = [];
      
      let options = {
        keys: ['item']
      };
      
      // for (var i=0; i<itemSeeds.length; i++) {
      //   let fuse = new Fuse(itemSeeds, options)
      //   if(fuse.search(this.state.searchText){
          
      //   }

      // }


      for (var i = 0; i < itemSeeds.length; i++) {
        if (itemSeeds[i].item.toLowerCase().indexOf(this.state.searchText) >= 0) {
          tempResults.push(itemSeeds[i])
        }
        this.setState({
          results: tempResults
        })
      }

      console.log(this.state);
      console.log(itemSeeds)
      // console.log(this.name.searchBar.value);
      // console.log('submitted')
    }
  };
  

  // componentDidMount(){
  //   this.setState({ results: [
  //   ]
  //   })
  // }

  render() {
    return (
      
      <div>
        <Row> 
        <div className="input-group" id="searchHolder">
          <SearchBar className="form-control" onChange={this.handleInputChange} value={this.state.searchText} />
          <span>
            <SearchButton onClick={this.handleSubmit} />
          </span>
          </div>
          </Row>
          <Row>
            <Col size="sm-8">
              <SearchResultsTable results={this.state.results} />
            </Col>
            <Col size="sm-4">
              Map
            </Col>
          </Row>
      </div>
    );
  }
}

export default SearchResultsMain;


