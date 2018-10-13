import React, { Component } from "react";
import API from "../../utilsClient/routesClient";
import AddItemBtn from "../../components/addItemModal/addItemBtn";
import AddItemModal from "../../components/addItemModal";
import StoreItemsTable from "./storeItemsTable";
import { Table, Col } from 'reactstrap';
import "./Profile.css";
import Login from "../Login"
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

    // This method grabs the store DATA not just the store items
    getStoreData = (storeId) => {
        API.getStoreData(storeId)
            .then(res =>
                {
                console.log(res.data)
                const newState  = {
                    ...this.state,
                    ...res.data
                }
                this.setState(newState)
                }
            )
            .catch(err => console.log(err))
    }

    // method for getting items from db using using the store's id
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
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value
        });
        console.log(this.state.price)
    };

    // method for saving items to db 
    saveNewItem = (name, price, category, store, address) => {
   console.log('state: ' + this.state)
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

    onClickSubmit = e => {
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
        console.log(this.state)
        console.log(this.props)
        const thisStoresItems = this.state.storeItems;
        return (

        <div>   

          { this.props.userLoggedIn 
            //If authenticated is true display items below
            ? 
            <div className ="profile-content" id="itemModal">
                <AddItemBtn onClick={this.toggle}/>
                <AddItemModal
                    onChange={this.onChange} 
                    isOpen={this.state.modal} 
                    toggle={this.toggle}
                    onClick={this.onClickSubmit}
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
                      //If authenticated is false display items below
            :  <Login></Login>
        }



        </div> 
        );
    }
}

export default Profile;