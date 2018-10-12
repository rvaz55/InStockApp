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
        itemInfo: {
            itemToAdd: "",
            price: 0,
            category: "",
            store: "",
            address: ""
        },
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
        this.setState({ itemInfo: e.target.value });
    };

    // method for saving items to db 
    saveNewItem = () => {
        API.saveItem({
            itemName: this.state.itemInfo.itemToAdd,
            price: this.state.itemInfo.price,
            category: this.state.itemInfo.category,
            store: this.state.itemInfo.store,
            address: this.state.itemInfo.address
        })
            .then(res =>
                console.log(res))
            .catch(err => console.log(err))
    }

    onSubmit = e => {
        e.preventDefault();
        this.saveNewItem(this.state.itemToAdd)

        // Close modal
        this.toggle();
    }
    render() {
        const thisStoresItems = this.state.storeItems;
        return (
            <div className="profile-content">
                {/* <h1>{store.storeName} Inventory</h1> */}

                {/* // {this.state.items.length ? (
            //     {this.state.items.map(item => (

            //     ))}
            // )} */}
                <AddItemModal
                    onClick={this.toggle}
                    isOpen={this.state.modal}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    toggle={this.toggle}
                />

                {/* <h1>Add items to inventory.</h1> */}



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
                            <StoreItemsTable storeItems={thisStoresItems} />
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