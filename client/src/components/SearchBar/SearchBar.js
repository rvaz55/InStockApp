import React, { Component } from 'react';
import "./SearchBar.css";

class SearchBar extends Component {
  
    render() {
        return (

            <div className="Search">
                <div className="active-purple-4 mb-3">
                    <input onChange = {this.props.onChange} className="form-control" type="text" placeholder="What are you looking for?" aria-label="Search" value={this.props.value} name="searchText" />
                </div>
            </div>
        );
    }
}

export default SearchBar;