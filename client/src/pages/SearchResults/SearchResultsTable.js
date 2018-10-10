import React, { Component } from 'react';
import ResultItem from "./ResultItem";
import ColumnForResultCards from "../../components/Layout";

class SearchResults extends Component {
    
    // method for splitting results array into chunks of 3 for the 3 column card layout
    splitArrayIntoChunks(resultsArray, chunkSize){
        let results = [];
        
        while (resultsArray.length) {
            results.push(resultsArray.splice(0, chunkSize));
        }
        
        return results;
    }
     
    render() {
        let resultItems;
        let splitArray=[];
        let resultsItemsForRow;
        let first;
        let second;
        let third;
        // if results are found from the search, create a ResultItem component for each result in the array
        if(this.props.results) {
                resultItems = this.props.results;
                splitArray = this.splitArrayIntoChunks(resultItems, 3);
                resultsItemsForRow = splitArray.map(each => {
                    console.log(resultItems)
                    first = each[0];
                    second=each[1];
                    third=each[2];      
    return (
            <div className="container">
                        <div className="row">
                            <div className="col">
                                <ResultItem key={first.name} result={first} />
                            </div>
                            <div className="col">
                                <ResultItem key={second.name} result={second} />
                            </div>
                            <div className="col">
                            <ResultItem key={third.name} result={third} />
                            </div>
                        </div>
                    </div>
            );
        })
    };
    return (
            <div> 
            {resultsItemsForRow}
        </div>
    )
}
}
    
    export default SearchResults;
    // if(this.props.results) {
        //     resultItems = this.props.results.map(result => {
    //         // console.log(result);
    // return (
    // <ResultItem key={result.name} result={result} />
    //     );
    // });
    // }
    // return (
        //     <div className = "col-md-4"> 
    //         {resultItems}
    //     </div>
    // );




    // 2nd attempt
    // let resultItems = this.props.results;
    // let resultsLength = resultItems.length;
    // let counter = 0;
    // let remaining;
    // let currentResultItem;
    // let secondItem;
    // let thirdItem;
    // let tempResults = [];
    // for (var i = 0; i < resultsLength; i++) {
    //     currentResultItem = resultItems[i];
    //     secondItem = resultItems[i+1];
    //     thirdItem = resultItems[i+2];

    //     if (i = 0 && resultsLength > 2) {
    //         tempResults.push(currentResultItem);
    //         tempResults.push(secondItem);
    //         tempResults.push(thirdItem);
    //     }
// }