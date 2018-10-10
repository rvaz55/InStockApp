import React from 'react';
import { Input, option } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const catOptionsHolder = props => {
   
        // 1st column will contain the even array results
        let allItems = props.allItem;
        let allOptions;
                
        // if results are found from the search, create a ResultItem component for each result in the array
        if(allItems) {
            // Split results array into 2 separate array of odd indexes and even indexes to fill in 2 columns
            allOptions = allItems.map(each => {
    return (
            <option value={each.category}> {each.category} </option>     )
            })
        }
    return (
        <Input>{allOptions}</Input>
    );    
}

    export default catOptionsHolder;