import React from 'react';
import Dropdown from "./dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap';

const categories = ['soup', 'condiment', 'spice', 'sauce', 'frozen', 'dairy', 'produce', 'herbal', 'hollistic medicine'];
const  sortedCategories = categories.sort();  

const DropdownInput = (props) => {
  return (
    <div className="active-purple-4 mb-3">
      <Input id="bla" type="select" defaultValue="condiments" onChange={props.onChange}>
        <Dropdown categories={sortedCategories}/>  
      </Input>
    </div>
  )
}

export default DropdownInput;