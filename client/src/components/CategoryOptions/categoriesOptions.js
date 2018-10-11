import React from 'react';
import { Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const categoryOptions = () => {

    let categories = [spice, sauce, condiment, soup, frozen, dairy];
    let catOptions = categories.map(eachCat => {
        return (
            <option>eachCat</option>
        )
    })
    return (
        <Input>{catOptions}</Input>
    )
}

export default categoryOptions;