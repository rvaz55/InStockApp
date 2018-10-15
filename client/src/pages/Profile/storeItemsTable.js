import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteBtn from "../../components/DeleteBtn";
import "./Profile.css";

const StoreItemsTable = props => {

    
    let storeItems = props.storeItems;
    let sortedItems = storeItems.sort();
    let storeItemsTable;


    // if results are found from the db, create a row component for each item in the array
    if (storeItems) {

        storeItemsTable = sortedItems.map(each => {
            return (
                <tr key={each._id}>
                    <td scope="row">{each.itemName}</td>
                    <td>{each.price}</td>
                    <td>{each.category}</td>
                    <td>{each.storeName}</td>
                    <td>{each.storeAddress}</td>
                    <td>
                        <DeleteBtn onClick={() => props.deleteItem(each._id)} key={each._id} />
                    </td>
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