import React from "react";
import "./SearchBar.css";
import { Button } from 'mdbreact';






const SearchBar = props => (

    <div className="Search">
        <div className="active-purple-4 mb-3">
            <input className="form-control" type="text" placeholder="What are you looking for?" aria-label="Search" />
        </div>
        <div className = "SearchButton">
        <Button color="deep-purple">Search</Button>
        </div>

    </div>
);










export default SearchBar;