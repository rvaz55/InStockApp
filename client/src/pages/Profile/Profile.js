import React, { Component } from "react";
import API from "../../utilsClient/routesClient";
import { Input, FormBtn } from "../../components/Form";

class Profile extends Component {
    state = {
        storeName: "",
        items: [],
        itemName: "",
        price: "",
        quantity: "",
        weight: "",
        weightMeasuredIn: "",
        categories: ""
    };

    componentDidMount() {
        this.loadStore();
        this.loadItems();
    }

    loadStore = () => {
        API.getStore()
            .then(res =>
                this.setState({ storeName: "" })
            )
            .catch(err => console.log(err));
    };

    loadItems = () => {
        API.getItems()
            .then(res =>
                this.setState({ items: [], itemName: "", price: "", quantity: "", weight: "", weightMeasuredIn: "", categories: "" })
            )
            .catch(err => console.log(err));
    };

    deleteItem = id => {
        API.deleteItem(id)
            .then(res => this.loadStore())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.itemName) {
            API.saveItem({
                itemName: "",
                price: "",
                quantity: "",
                weight: "",
                weightMeasuredIn: "",
                categories: ""
            })
                .then(res => this.loadItems())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                {/* <h1>{store.storeName} Inventory</h1> */}

                {/* // {this.state.items.length ? (
            //     {this.state.items.map(item => (

            //     ))}
            // )} */}

                <h1>Add items to inventory.</h1>

                <form>
                    <Input
                        value={this.state.itemName}
                        onChange={this.handleInputChange}
                        name="itemName"
                        placeholder="Item Name (required)"
                    />
                    <Input
                        value={this.state.price}
                        onChange={this.handleInputChange}
                        name="price"
                        placeholder="Price (optional)"
                    />
                    <Input
                        value={this.state.quantity}
                        onChange={this.handleInputChange}
                        name="quantity"
                        placeholder="Quantity (optional)"
                    />
                    <Input
                        value={this.state.weight}
                        onChange={this.handleInputChange}
                        name="weight"
                        placeholder="Weight (optional)"
                    />
                    <Input
                        value={this.state.weightMeasuredIn}
                        onChange={this.handleInputChange}
                        name="weightMeasuredIn"
                        placeholder="Weight Measurement (optional)"
                    />
                    <Input
                        value={this.state.quantity}
                        onChange={this.handleInputChange}
                        name="quantity"
                        placeholder="Quantity (optional)"
                    />
                    <Input //Dropdown
                        value={this.state.categories}
                        onChange={this.handleInputChange}
                        name="categories"
                        placeholder="Categories (optional)"
                    />
                    <FormBtn
                        disabled={!(this.state.itemName)}
                        onClick={this.handleFormSubmit}
                    >
                        Add Item
              </FormBtn>
                </form>

            </div>

        )
    }
}

export default Profile;