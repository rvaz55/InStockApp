import React, { Component } from "react";
import API from "../../utilsClient/routesClient";
//import { Input, FormBtn } from "../../components/Form";

class Profile extends Component {
    state = {
        username: "",
        password: ""
    };
    

    // when user clicks submit button on modal, the item info gets added to the Items collection
    // API.saveItem


    render() {
        return (
            <div>
                {/* <h1>{store.storeName} Inventory</h1> */}

                {/* // {this.state.items.length ? (
            //     {this.state.items.map(item => (

            //     ))}
            // )} */}

                <h1>Add items to inventory.</h1>



            <p>Welcome username</p>
            </div>
        );
      }
}

export default Profile;