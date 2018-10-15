import React from 'react';
import Dropdown from "./dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap';

const categories = ['Soup', 'Condiment', 'Beverage', 'Spice', 'Sauce', 'Frozen', 'Dairy', 'Produce', 'Herbal', 'Hollistic medicine', 'Snacks', 'Candy'];
const  sortedCategories = categories.sort();  

const DropdownInput = (props) => {
  return (
    <div className="active-purple-4 mb-3">
      <Input id="bla" type="select" name="category" defaultValue="condiments" onChange={props.onChange}>
        <Dropdown categories={sortedCategories}/>  
      </Input>
    </div>
  )
}

export default DropdownInput;