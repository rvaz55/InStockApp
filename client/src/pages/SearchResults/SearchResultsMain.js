import React, { Component } from 'react';
import SearchResultsTable from "./SearchResultsTable";
import SearchBar from "../../components/SearchBar";
import SearchButton from "../../components/SearchButton";

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
    if(!this.state.searchText){
        alert("must enter search word");
    } else {
            console.log(this.state);
        }
    // console.log(this.name.searchBar.value);
    // console.log('submitted')
};

  componentDidMount(){
    this.setState({ results: [
      {
        name: "name1",
        price: "price1",
        category: "category1",
        store: "store1"
      },
      {
        name: "name2",
        price: "price2",
        category: "category2",
        store: "store2"
      },
      {
        name: "name3",
        price: "price3",
        category: "category3",
        store: "store3"
      }
    ]
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar onChange={this.handleInputChange} value={this.state.searchText} />
        <SearchButton onClick={this.handleSubmit} />
        <SearchResultsTable results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultsMain;
