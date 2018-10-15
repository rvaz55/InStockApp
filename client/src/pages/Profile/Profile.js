import React, { Component } from "react";
import API from "../../utilsClient/routesClient";
import AddItemBtn from "../../components/addItemModal/addItemBtn";
import AddItemModal from "../../components/addItemModal/addItem";
import StoreItemsTable from "./storeItemsTable";
import Login from "../Login"
import { Table, Col } from 'reactstrap';
import "./Profile.css";
//import { Input, FormBtn } from "../../components/Form";

// Creating a promise wrapper for setTimeout
function wait(delay = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });
}

class Profile extends Component {
    state = {
        // username: "",
        // password: "",
        storesid: "",
        storeName: "",
        storeAddress: "",
        modal: false,
        itemName: "",
        price: 0,
        category: "",
        store: "",
        address: "",
        storeItems: []
    };

    // This method grabs the store DATA from the store collection
    getStoreData = (storeId) => {
        API.getStoreData(storeId)
            .then(res => {
                // console.log(res.data)
                this.setState(state => (
                    state.storeName = res.data.storeName,
                    state.storeAddress = res.data.storeAddress,
                    state.storesid = res.data._id, state
                ))
            })
            // const newState  = {
            //     ...this.state.currentStore,
            //     ...res.data
            // }
            // this.setState(newState)
            // }

            .catch(err => console.log(err))
    }

    // This method grabs the items DATA from the item collection using the storeID
    getStoreItems = (storeId) => {
        API.getStoreItems(storeId)
            .then(res =>
                this.setState({ storeItems: res.data })
            )
            .catch(err => console.log(err))
        console.log(this.state.storeItems)
    }

    componentDidMount() {
        console.log(this.props.storeID)
        this.props.setUserLoggedIn(true)
        this.getStoreData(this.props.storeID)
        this.getStoreItems(this.props.storeID)
        // console.log(this.state)
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onClickSubmit = (e) => {
        e.preventDefault();
        const { itemName, price, category, storeName, storesid, storeAddress } = this.state;
        API.saveItem({
            itemName: itemName,
            price: price,
            category: category,
            storeName: storeName,
            storesid: storesid,
            storeAddress: storeAddress
        })
            // wait(5000)
            .then(res => {
                console.log('res: ' + res)
            })
            .catch(err => console.log(err))
        // Close modal
        this.toggle();
        console.log(this.state)
        this.getStoreItems(this.state.storesid)
    }

    //method for deleting items from db using item id
    deleteItem = itemId => {
        API.deleteItem(itemId)
            .then(res => {
                console.log(res.data);
                this.getStoreItems(this.state.storesid)
            })
            .catch(err => console.log(err));
    };

    render() {
        const thisStoresItems = this.state.storeItems;
        return (
            <div className="profile-content" id="itemModal">
                <h2 className="display-4">Welcome {this.state.storeName}!</h2>
                
                <AddItemBtn onClick={this.toggle} />
                <AddItemModal
                    onChange={this.onChange}
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    onClick={this.onClickSubmit}
                />
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
                            <StoreItemsTable storeItems={thisStoresItems} deleteItem={this.deleteItem} />
                        </Table>
                    ) : (
                        <div className="empty-table-notification">
                            <h3 className="h3-responsive">Uh Oh! No Items in your Database.</h3>
                        </div>
                    )}
                </Col>
            </div>
        );
    }
}

export default Profile;