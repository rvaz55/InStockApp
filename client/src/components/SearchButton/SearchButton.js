import React, { Component } from 'react';
import "./SearchButton.css";
import { Button } from 'mdbreact';

class SearchButton extends Component {
  
    render() {
    return (

        <Button className = "SearchButton" onClick = {this.props.onClick} color="deep-purple">Search</Button>
);
    }
}

export default SearchButton; 