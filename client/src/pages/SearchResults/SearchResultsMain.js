import React, { Component } from 'react';
import API from "../../utilsClient/routesClient";
import CategoryOptions from "../../components/CategoryOptions";
import SearchBar from "../../components/SearchBar";
import SearchButton from "../../components/SearchButton";
import ResultsColumn1 from "./ResultsColumn1";
import ResultsColumn2 from "./ResultsColumn2";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Label, Input, FormGroup, Form } from 'reactstrap';
import "./SearchResults.css";
import { connect } from 'react-redux';
import { getItemsBySearch, getItemsByCategory } from '../../actions/itemActions';
import PropTypes from 'prop-types';

class SearchResultsMain extends Component {
  state = {
    searchText: "",
    allItems: [],
    category: ""
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    API.getAllItems()
    .then(res => 
      this.setState({allItems: res.data})
    )
    .catch(err=>console.log(err))
    console.log(this.state.allItems)
  }
  
  // update search box to show what is being typed
handleInputChangeOnBar = (e) => {
  this.setState({ [e.target.name]: e.target.value });
}

// update select to show what is being typed
handleInputChangeOnSelect = (e) => {
  this.setState({ [e.target.name]: e.target.value });
  console.log(this.state.category)
}

// get the value that is typed in the box to use in the search 
handleSubmit = e => {
  e.preventDefault();

  const newSearch = this.state.searchText;
  const newCatSearch = this.state.category;

  //Search results array in db via action
  if(this.state.searchText) {
    this.props.getItemsBySearch(newSearch);
  } else if (this.state.category){
    this.props.getItemsByCategory(newCatSearch);
  }
}
  
  render() {
    // this.props.item is the same as writing this.state
    // which was used when not using redux
    // use object destructuring to pull out the items array from item
    const item = this.props.item.items;
    const allItem = this.state.allItems;
    return (
      <Container fluid className="text-center text-md-left">
        <Form>
          <Row form>
            <Col md={{ size: 5, offset: 1 }}>
              <FormGroup>
                <SearchBar onChange={this.handleInputChangeOnBar} value={this.state.searchText} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup> 
                <SearchButton onClick={this.handleSubmit} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input type="select" onChange = {this.handleInputChangeOnSelect}>
                  <CategoryOptions/>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
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
<<<<<<< HEAD
      </Container>
    </Container>
=======
        </Container>
      </Container>
>>>>>>> bb96d82da99a4b2f0ffd1ef6632ca4faeba70ab2
    );
  }
}

// put component properties inside of prop types
// as a form of validation
// have 2 props in this component
// the actions (getItemsBySearch) from redux is stored as a prop

SearchResultsMain.propTypes = {
  getItemsBySearch: PropTypes.func.isRequired,
  // item represents the state
  item: PropTypes.object.isRequired,
  getItemsByCategory: PropTypes.func.isRequired
}

// writing the mapStateToProps function
// to set the state from reducer file
// mapping the prop to the state
const mapStateToProps = (state) => ({
  item: state.item,
})

// connect takes in 2 params -- 
// map current state to property
// 2nd one is the action we are using
export default connect(mapStateToProps, { getItemsBySearch, getItemsByCategory })(SearchResultsMain);


