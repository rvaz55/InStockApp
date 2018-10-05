import React, { Component } from 'react';
import "./SearchButton.css";
import { Button } from 'mdbreact';

class SearchButton extends Component {
  
    render() {
    return (

    <div className="SearchButton">
        <Button onClick = {this.props.onClick} color="deep-purple">Search</Button>
    </div>
);
    }
}

export default SearchButton;