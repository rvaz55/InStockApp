import React, { Component } from "react";
import API from "../../utilsClient/routesClient";
import PhotoAPI from "../../utilsClient/photoAPI";
import AddItemBtn from "../../components/addItemModal/addItemBtn";
import AddItemModal from "../../components/addItemModal/addItem";
import StoreItemsTable from "./storeItemsTable";
//import Login from "../Login"
import Logo from "../../Instock.png";

import { Table, Col } from 'reactstrap';

import "./Profile.css";
//import { Input, FormBtn } from "../../components/Form";
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });
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
        itemID: null,
        storeItems:[],
        category:''
    };

    // This method grabs the store DATA from the store collection
    getStoreData = (storeId) => {
        API.getStoreData(storeId)
            .then(res => {
                //console.log(res.data)
                const newState  = {
                    ...this.state.currentStore,
                    ...res.data,
                    userLoggedIn: true
                }
                this.setState(newState)
                //console.log(this.state.userLoggedIn)
            })
            .catch(err => console.log(err))
    }

    // This method grabs the items DATA from the item collection using the storeID
    getStoreItems = (storeId) => {
        API.getStoreItems(storeId)
            .then(res =>
                {this.setState(byPropKey('storeItems', res.data),()=>{
                    console.log("state after getStoreItems: "+JSON.stringify(this.state));
                });

                 console.log(res.data);
                }
            )
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.props.setUserLoggedIn(true)
        this.getStoreData(this.props.storeID)
        this.getStoreItems(this.props.storeID)

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
        console.log(this.state)
    
        const{ itemName, price, category, _id } = this.state;
        console.log(`${itemName}, ${price}, ${category}, ${_id}`)
        console.log(_id)

         API.saveItemToStoreInventory( _id, itemName, price, category)
         .then(res =>  {
             //Here the 'this.thetStoreData()' method is called to grab the recently added 'item'
             //After grabbing the new array of 'items', the page redirects to the profile page
             //which then re-renders the 'items table', *including* the new 'item'
             
             this.getStoreData(_id)
             this.getStoreItems(_id)
             console.log(this.props.history)
             let path = `/profilepage/${this.state._id}`;
             return this.props.history.push(path)
            })
         .catch(err => console.log(err))
        
         // Close modal
        this.toggle();

    }

    //method for deleting items from db using item id
    deleteItem = (itemId, itemName) => {
        console.log('sudgfvue')
        console.log(itemId)
        console.log(itemName)
       const storeId = this.state._id;
       console.log(storeId)
        API.deleteFromStoreInventory(storeId, itemName,itemId)
            .then(res => {
                console.log("happens in the Profile.js")
                console.log(res.data);
                
            })
            .catch(err => console.log(err));
        
        
        API.deleteStoreFromItemList(storeId,itemName,itemId)
        .then(res=>{
            console.log(res);
            
        }).catch(err=>{console.log(err)});
 
        this.getStoreData(storeId);
        this.getStoreItems(storeId);

    };

    render() {
        //console.log(this.state.stockedItems);
        //console.log(this.state)
        return (
        
        

            <div className="profile-content" id="itemModal">

                      <img className="profile-logo"src={Logo} alt="InStock Logo"/>

            
            <h1 className="display-4">Welcome {this.state.storeName}!</h1>
                <AddItemBtn onClick={this.toggle} />
                <AddItemModal
                    onChange={this.onChange}
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    onClick={this.onClickSubmit}
                />

                

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
                            <StoreItemsTable storeItems={this.state.stockedItems} storeID={this.props.storeID} deleteItem={this.deleteItem} />
                        </Table>
                    ) : (
                            <h3>No items in your account</h3>

                        )}
                </Col>
            </div>
        );
    }
}

export default Profile;