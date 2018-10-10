// import React, { Component } from 'react';
// import SearchBar from "../../components/SearchBar";
// import SearchButton from "../../components/SearchButton";
// import ResultsColumn1 from "./ResultsColumn1";
// import ResultsColumn2 from "./ResultsColumn2";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'reactstrap';
// import "./SearchResults.css";
// import { connect } from 'react-redux';
// import { getItemsBySearch, getItemsByCategory } from '../../actions/itemActions';
// import PropTypes from 'prop-types';

//  class SearchResultsMain extends Component {
//    state = {
//      searchText: ""
//    }
  
// // update search box to show what is being typed
//  handleInputChange = (e) => {
//    this.setState({ [e.target.name]: e.target.value });
//  }

// // get the value that is typed in the box to use in the search 
// handleSubmit = e => {
//    e.preventDefault();
//    console.log("search" + this.state.searchText)
//    const newSearch = this.state.searchText
//    //Search results array in db via action
//   // this.props.getItemsBySearch(newSearch);
//  }
  
//    render() {
//     // this.props.item is the same as writing this.state
//     // which was used when not using redux
//     // use object destructuring to pull out the items array from item
//     const item = this.props.item.items;
//     return (
//       <Container fluid className="text-center text-md-left">
//         <Row>
//           <div className="input-group" id="searchHolder">
//             <SearchBar onChange={this.handleInputChange} value={this.state.searchText} />
//             <span>
//               <SearchButton onClick={this.handleSubmit} />
//             </span>
//           </div>
//         </Row>
//         <Container fluid className="text-center text-md-left">
//           <Row>
//             <Col size="sm-4">
//               <ResultsColumn1 items={item} />
//             </Col>
//             <Col size="sm-4">
//               <ResultsColumn2 items={item} />
//             </Col>
//             <Col size="sm-4">
//               Map
//               </Col>
//           </Row>
//         </Container>
//       </Container>
//     );
//   }
// }

// // put component properties inside of prop types
// // as a form of validation
// // have 2 props in this component
// // the actions (getItemsBySearch) from redux is stored as a prop

//  SearchResultsMain.propTypes = {
//    getItemsBySearch: PropTypes.func.isRequired,
//    // item represents the state
//    item: PropTypes.object.isRequired
// }

// // writing the mapStateToProps function
// // to set the state from reducer file
// // mapping the prop to the state
//  const mapStateToProps = (state) => ({
//    item: state.item,
//  })

// // connect takes in 2 params -- 
// // map current state to property
// // 2nd one is the action we are using
// export default connect(mapStateToProps, { getItemsBySearch, getItemsByCategory })(SearchResultsMain);


