import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteBtn from "../../components/DeleteBtn";
import "./Profile.css";

const StoreItemsTable = props => {

    //console.log(props)
    //console.log(props.storeItems)
    let storeItems = props.storeItems
    let storeItemsTable;
    //console.log(storeItems)
    //console.log(storeItems[1])
    //console.log(storeItems.object)


    // if results are found from the db, create a row component for each item in the array
     if (storeItems) 
     console.log(storeItems)
        { storeItemsTable = storeItems.map(each => {
             return (
                 <tr key={each._id} data-itemID={each.itemID} data-itemName={each.itemName} price={each.price}>
                     <td scope="row" >{each.itemName}</td>
                     <td>{each.price}</td>
                     <td>{each.category}</td>

                     <td>
                         <DeleteBtn onClick={() => props.deleteItem(each.itemID, each.itemName)} />
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