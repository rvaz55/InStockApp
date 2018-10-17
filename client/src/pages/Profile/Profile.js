import React, { Component } from "react";
import API from "../../utilsClient/routesClient";
import PhotoAPI from "../../utilsClient/photoAPI";
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
        modal: false,
        itemName: "",
        stockedItems: [],
        userLoggedIn: false,
        price: null,
        category:''
    };

    // This method grabs the store DATA from the store collection
    getStoreData = (storeId) => {
        API.getStoreData(storeId)
            .then(res => {
                console.log(res.data)
                const newState  = {
                    ...this.state.currentStore,
                    ...res.data,
                    userLoggedIn: true
                }
                this.setState(newState)
                console.log(this.state.userLoggedIn)
            })
            .catch(err => console.log(err))
    }

    // This method grabs the items DATA from the item collection using the storeID
    getStoreItems = (storeId) => {
        API.getStoreItems(storeId)
            .then(res =>
                this.setState({ storeItems: res.data })
            )
            .catch(err => console.log(err))
    }

    componentDidMount() {
        //console.log(this.props.storeID)
        console.log(this.props)
        //console.log(this.state)
        this.props.setUserLoggedIn(true)
        //this.props.storeID(this.props.storeID)
        this.getStoreData(this.props.storeID)
        this.getStoreItems(this.props.storeID)
        console.log(this.state)
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

    getPic = (item) => {
        PhotoAPI.getPhoto(item)
        .then(res => {if (res.data.results) {return res.data.results[0].urls.regular}})
        .catch(err => console.log(err))
    }
    
    onClickSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
    
        const{ itemName, price, category, _id } = this.state;
        //console.log(this.state)
        //console.log(this.state.storeID)
        //console.log(this.state.price)
        //console.log(this.state.itemName)
        //console.log(itemName)
        //console.log(_id)
        //console(price)
        //console.log(category)

         API.saveItemToStoreInventory( _id,itemName, price, category )
         .then(res => {console.log( res )})
         .catch(err => console.log(err))
            // Close modal
           this.toggle();
           console.log(this.state)
           this.getStoreItems(this.state._id)
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
        console.log(this.state.stockedItems);
        console.log(this.state)
        return (
            <div className="profile-content" id="itemModal">
                <AddItemBtn onClick={this.toggle} />
                <AddItemModal
                    onChange={this.onChange}
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    onClick={this.onClickSubmit}
                />

                <p>Welcome {this.state.storeName}</p>

                <Col md={{ size: 8, offset: 2 }}>
                    {this.state.stockedItems.length ? (
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
                            <StoreItemsTable storeItems={this.state.stockedItems} deleteItem={this.deleteItem} />
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