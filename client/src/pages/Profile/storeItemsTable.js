import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../../utilsClient/routesClient";
import DeleteBtn from "../../components/DeleteBtn";
import { Table } from 'reactstrap';


const StoreItemsTable = props => {


    let storeItems = props.storeItems;
    let sortedItems = storeItems.sort();
    let storeItemsTable;

    //method for deleting items from db using item id
    const deleteItem = itemId => {
        API.deleteItem(itemId)
            .then(res => this.getStoreItems())
            .catch(err => console.log(err));
    };

    // if results are found from the db, create a row component for each item in the array
    if (storeItems) {

        storeItemsTable = sortedItems.map(each => {
            return (
                <tr key={each._id}>
                    <th scope="row">{each.itemName}</th>
                    <td>{each.price}</td>
                    <td>{each.category}</td>
                    <td>{each.store}</td>
                    <td>{each.address}</td>
                    <td>
                        <DeleteBtn onClick={deleteItem(each._id)} />
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



