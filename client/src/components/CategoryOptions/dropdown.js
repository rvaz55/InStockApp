import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap';

//     constructor(props, context) {
//       super(props, context);
//       this.renderOptionComponent = this.renderOptionComponent.bind(this);
//     }

//   renderOptionComponent(option) {
//     return <option key={option}>{option}</option>;
//   }
const categories = ['soup', 'condiment', 'spice', 'sauce', 'frozen', 'dairy', 'produce', 'herbal', 'hollistic medicine'];
const  sortedCategories = categories.sort();

const Dropdown = () => {
return(
    <Input>
      {sortedCategories.map(category => {
        return <select key={category}>{category}</select>
      })}
    </Input>
    )
}

export default Dropdown;