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
      //let tempResults = [];
     // let options = {
     //   keys: ['item']
     // };

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