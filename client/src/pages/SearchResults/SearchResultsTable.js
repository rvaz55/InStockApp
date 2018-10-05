import React, { Component } from 'react';
import ResultItem from "./ResultItem";

class SearchResults extends Component {
    render() {
        let resultItems;
        if(this.props.results) {
            resultItems = this.props.results.map(result => {
                // console.log(result);
    return (
        <ResultItem key={result.name} result={result} />
            );
        });
    }
    return (
        <div className="SearchResults">
            {resultItems}
        </div>
    );
  }
}

export default SearchResults;
