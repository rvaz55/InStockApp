import React, { Component } from "react";
import API from "../../utilsClient/routesClient";
import AddItemModal from "../../components/addItemModal";
//import { Input, FormBtn } from "../../components/Form";

class Profile extends Component {
    state = {
        username: "",
        password: "",
        storeName: "Indian Groceries & Spices Inc" ,
        modal: false,
        itemToAdd: "",
        storeItems: []
    };

  // method for getting items from db using using the store's id
  getStoreItems = (storeId) => {
    API.getStoreItems(storeId)
    .then(res => 
    this.setState({ storeItems: res.data })
  )
  .catch(err=>console.log(err))
  console.log((this.state.storeItems))
  }

componentDidMount(){
    this.getStoreItems(this.state.storeName)
};

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ itemToAdd: e.target.value });
    };

    // method for saving items to db 
    saveNewItem = (newItem) => {
        API.saveItem(newItem)
        .then(res =>
            console.log(res)            )
            .catch(err => console.log(err))
    }

    onSubmit = e => {
        e.preventDefault();
        this.saveNewItem(this.state.itemToAdd)

        // Close modal
        this.toggle();
    }
    render() {
        return (
            <div>
                {/* <h1>{store.storeName} Inventory</h1> */}

                {/* // {this.state.items.length ? (
            //     {this.state.items.map(item => (

            //     ))}
            // )} */}
                <AddItemModal onClick={this.toggle} isOpen={this.state.modal} onChange={this.onChange} onSubmit={this.onSubmit} toggle={this.toggle} />

                {/* <h1>Add items to inventory.</h1> */}



                <p>Welcome {this.state.storeName}</p>

                {this.state.storeItems.length ? (
              <ul>
                {this.state.storeItems.map(each => (
                  <li key={each._id}>
                      {each.itemName}
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}

            </div>
        );
    }
}

export default Profile;