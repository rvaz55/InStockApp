import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchBar from "../../components/SearchBar";
import DropdownInput from "../../components/CategoryOptions";
import SearchButton from "../../components/SearchButton";
import ResultsColumn1 from "./ResultsColumn1";
import ResultsColumn2 from "./ResultsColumn2";
import ResultsMap from "./ResultsMap";
import InfoWindow from "./InfoWindow";
import API from "../../utilsClient/routesClient";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'reactstrap';
import Logo from "../../Instock.png";

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
      //If the item (aka 'res.data') is false (aka doesn't exist) 
      //then create the item in the DB
        if (res.data === false) {
          console.log((res.data))
          console.log("need to send this to the DB")
          console.log(search)
          API.saveItem(search)
          .then(res => {
            console.log(res.data)
            alert("No store currently carry this item")
          })
          .catch(error => console.log(error))

        } else {
          //If the item has a carriedByStores array that is quivalent to zero
          //then, the item isn't carried by any stores and the user must be alerted
          console.log((res.data))
          this.setState({ items: res.data })
          console.log(this.state.items)
        }
    }
  )
  .catch(err=>console.log(err))
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
    console.log(this.state.selectedCategory)
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
    console.log(this.state.items)
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

  createInfoWindow(e, map) {
    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow" />',
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    })
    infoWindow.addListener('domready', e => {
      render(<InfoWindow />, document.getElementById('infoWindow'))
    })
    infoWindow.open(map)
  }

  render() {
    let item = this.state.items;

    // const allItem = this.state.allItems;
    return (
      <div className="results">
        <Container fluid className="text-center text-md-left">
        <img className="profile-logo"src={Logo} alt="InStock Logo" />

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

              <h4 className="h4-responsive">Search by Category</h4>

              <div className="row searchHolder">
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
        <hr className="my-4" />

        <Container fluid className="text-center text-md-left">
          <Row>
            <Col size="sm-4">
              <ResultsColumn1 items={item} />
            </Col>
            <Col size="sm-4">
              <ResultsColumn2 items={item} />
            </Col>
            <Col size="sm-4">
              <ResultsMap
                id="resultsMap"
                options={{
                  center: { lat: 29.760427, lng: -95.369803 },
                  zoom: 8
                }}
                onMapLoad={map => {
                  const marker = new window.google.maps.Marker({
                    position: { lat: 29.7604, lng: -95.3698 },
                    map: map,
                    title: 'Houston!'
                  });
                  marker.addListener('click', e => {
                    this.createInfoWindow(e, map)
                  })
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// put component properties inside of prop types
// as a form of validation
// have 2 props in this component
// the actions (getItemsBySearch) from redux is stored as a prop

export default SearchResultsMain;

