import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';


const StoreItemsTable = props => {
   
    let storeItems = props.storeItems;
    let sortedItems = storeItems.sort();
    let storeItemsTable;
            
    // if results are found from the db, create a row component for each item in the array
    if(storeItems) {

        storeItemsTable = sortedItems.map(each => {
return (
    <tr key={each._id}>
        <th scope="row">{each.itemName}</th>
        <td>{each.price}</td>
        <td>{each.category}</td>
        <td>{each.store}</td>
        <td>{each.address}</td>
    </tr>
    )
    })
}
return (
    <tbody>
        {storeItemsTable}
    </tbody>
);    
}

export default StoreItemsTable;



