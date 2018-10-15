import React, { Component } from 'react';
import SearchBar from "../../components/SearchBar";
import DropdownInput from "../../components/CategoryOptions";
import SearchButton from "../../components/SearchButton";
import ResultsColumn1 from "./ResultsColumn1";
import ResultsColumn2 from "./ResultsColumn2";
import API from "../../utilsClient/routesClient";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'reactstrap';
import "./SearchResults.css";

class SearchResultsMain extends Component {
  state = {
    searchText: "",
    items: [],
    categoryItems: [],
    selectedCategory: "condiments"
  }

  componentDidMount() {
    const item = (this.props.history.location.pathname.split("/search/")[1]).replace(/\+/g, ' ')

    console.log(item)
    this.getSearchResults(item);
  }

  // getItems = () => {
  //   API.getAllItems()
  //   .then(res => 
  //     this.setState({allItems: res.data})
  //   )
  //   .catch(err=>console.log(err))
  //   console.log(this.state.allItems)
  // }

  // method for getting items from db using using item search word
  getSearchResults = (search) => {
    API.getItemsBySearch(search)
      .then(res => {
        console.log((res))
        this.setState({ items: res.data })
      }
      )
      .catch(err => console.log(err))
  }

  // method for getting items from db using category search
  getCategoryResults = (category) => {
    API.getItemsByCategory(category)
      .then(res => {
        console.log(res);
        this.setState({ items: res.data })
      })
      .catch(err => console.log(err))
    console.log((this.state.items))
  }

  // update search box to show what is being typed
  handleInputChangeOnBar = (e) => {
    this.handleInputChangeOnBar.bind(this);
    this.setState({ [e.target.name]: e.target.value });
  }

  // update select to show what is being typed
  handleInputChangeOnSelect = (e) => {
    this.handleInputChangeOnSelect.bind(this);
    let selected = e.target.value;
    this.setState({ selectedCategory: selected });
  }

  // get the value that is typed in the box to use in the search 
  handleSearchBarSubmit = e => {
    e.preventDefault();
    this.handleSearchBarSubmit.bind(this)
    const newSearch = this.state.searchText;

    //Search results array in db via action
    if (this.state.searchText) {
      this.getSearchResults(newSearch);
    }
  }

  // get the value that is typed in the box to use in the search 
  handleCategorySubmit = e => {
    e.preventDefault();
    const newCatSearch = this.state.selectedCategory;

    //Search results array in db via action
    if (this.state.selectedCategory) {
      this.getCategoryResults(newCatSearch);
    }
  }

  render() {
    let item = this.state.items;

    // const allItem = this.state.allItems;
    return (

      <div className="results">





        <Container fluid className="text-center text-md-left">

          <div className="search-form">
            <Form>
                <div className="row">
                  <div className="col-10">
                    <SearchBar onChange={this.handleInputChangeOnBar} value={this.state.searchText} />
                  </div>
               
                
                <div className="col-2">
                    <SearchButton onClick={this.handleSearchBarSubmit} />
                  </div>
                </div>

                 <h4 className="h4-responsive"> Search by Category</h4>



              <div className="row">
                  <div className="col-4">
                    <DropdownInput onChange={this.handleInputChangeOnSelect} value={this.state.selectedCategory} />
                    
                  </div>
                  <div className="col-8">
                    <SearchButton onClick={this.handleCategorySubmit} />
                  </div>
                  
              </div>
            </Form>  
           
            </div>

          </Container>

                 <hr className="my-4"/>

      <div className="result-items">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col size="sm-4">
              <ResultsColumn1 items={item} />
            </Col>
            <Col size="sm-4">
              <ResultsColumn2 items={item} />
            </Col>
            <Col size="sm-4">
              Map
              </Col>
          </Row>
        </Container>
      </div>
       
      </div >
    );
  }
}

// put component properties inside of prop types
// as a form of validation
// have 2 props in this component
// the actions (getItemsBySearch) from redux is stored as a prop

export default SearchResultsMain;


