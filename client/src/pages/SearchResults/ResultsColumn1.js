import React from 'react';
import ResultItem from './ResultItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './SearchResults.css';

const ResultsColumnOne = props => {
   
        // 1st column will contain the even array results
        let resultItems = props.items;
        let carriedByStores = props.carriedByStores;
        let col1Array = resultItems.filter((a,i) => !(i%2));
        let resultsItemsForCol1;

        // console.log("-----------------------------")
        // console.log("happens in the resultsCol1.js file")
         console.log(props)
         console.log(resultItems)
         console.log(carriedByStores)

         let c = console.log.bind(console)
         carriedByStores.forEach(c);

         //console.log(col1Array)

        // Create a 'forEach' for the carriedByStores data
        //and see if I can extract all the necessary fields!

        //resultItems.
                
        // if results are found from the search, create a ResultItem component for each result in the array
        if(resultItems) {
            // Split results array into 2 separate array of odd indexes and even indexes to fill in 2 columns
            //resultsItemsForCol1 = col1Array.map(each => {
            resultsItemsForCol1 = carriedByStores.map(each => {
    return ( 
        <CSSTransition key={each._id} timeout={500} classNames="fade">
            <ListGroupItem id="resultItem">
                <ResultItem key={each._id} photo={each.photo} itemName={each.itemName} price={each.itemPrice} store={each.storeID} phone={each.phone} category={each.category}/>       
            </ListGroupItem>
        </CSSTransition>
    )
            })
        }
    return (
        <ListGroup>
            <TransitionGroup className="itemsList">
                {resultsItemsForCol1}
            </TransitionGroup>
        </ListGroup>
    );    
}

    export default ResultsColumnOne;