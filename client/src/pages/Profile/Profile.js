import React, { Component } from "react";
import API from "../../utilsClient/routesClient";
import AddItemModal from "../../components/addItemModal";
import StoreItemsTable from "./storeItemsTable";
import { Table, Col } from 'reactstrap';
import "./Profile.css";
//import { Input, FormBtn } from "../../components/Form";

class Profile extends Component {
    state = {
        username: "",
        password: "",
        storeName: "Indian Groceries & Spices Inc",
        modal: false,
        itemName: "",
        price: 0,
        category: "",
        store: "",
        address: "",
        storeItems: []
    };

    // method for getting items from db using using the store's id
    getStoreItems = (storeId) => {
        API.getStoreItems(storeId)
            .then(res =>
                this.setState({ storeItems: res.data })
            )
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getStoreItems(this.state.storeName)
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // method for saving items to db 
    saveNewItem = (name, price, category, store, address) => {
        API.saveItem({
            itemName: name,
            price: price,
            category: category, 
            store: store, 
            address: address})
            .then(res =>
                console.log(res))
            .catch(err => console.log(err))
    }

    onSubmit = e => {
        e.preventDefault();
        this.saveNewItem(this.state.itemName, this.state.price, this.state.category, this.state.store, this.state.address)
        this.getStoreItems(this.state.storeName)

        // Close modal
        this.toggle();
    }

        //method for deleting items from db using item id
     deleteItem = itemId => {
            API.deleteItem(itemId)
                .then(res => {
                    console.log(res);
                    this.getStoreItems(this.state.storeName)})
                .catch(err => console.log(err));
        };
    
    render() {
        const thisStoresItems = this.state.storeItems;
        return (
            <div className ="profile-content" id="itemModal">
                <AddItemModal
                    onClick={this.toggle} 
                    isOpen={this.state.modal} 
                    onChange={this.onChange} 
                    onSubmit={this.onSubmit} 
                    toggle={this.toggle}
                />

                <p>Welcome {this.state.storeName}</p>

                <Col md={{ size: 8, offset: 2 }}>
                    {this.state.storeItems.length ? (
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Store</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <StoreItemsTable storeItems={thisStoresItems} deleteItem={this.deleteItem}/>
                        </Table>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </div>
        );
    }
}

export default Profile;