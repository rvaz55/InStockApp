import React, { Component } from 'react';
import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar";
import SearchButton from "../../components/SearchButton";




class Home extends Component {

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

      console.log(this.state);
      console.log(item)
      let item = JSON.stringify(this.state.searchText)
      let path = `/search/${item.slice(1, -1)}`;
      this.props.history.push(path);
      console.log(item)

    }
  };


  render() {
    return (
      <div>
        <Header />

        <div className="input-group" id="searchHolder">
          <SearchBar className="form-control" onChange={this.handleInputChange} value={this.state.searchText} />
          <span>
            <SearchButton onClick={this.handleSubmit} />
          </span>
          </div>


      </div>



    );
  }
}


export default Home;