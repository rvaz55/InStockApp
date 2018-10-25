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
        { storeItemsTable = storeItems.map(each => {
             return (
                 <tr key={each._id}>
                     <td scope="row" key={each._id}>{each.itemName}</td>
                     <td>{each.price}</td>
                     <td>{each.category}</td>

                     <td>
                         <DeleteBtn onClick={() => props.deleteItem(each._id, each.key, each.itemID)} key={each._id} itemID={each._id} />
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