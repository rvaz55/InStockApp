import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap';

const Dropdown = (props) => {
  let categories = props.categories;
  return (
      <React.Fragment>
        {categories.map(category => (
          <React.Fragment key={category}>
            <option value={category}>{category}</option>
          </React.Fragment>
        ))}
      </React.Fragment>
  )
}




// function Dropdown(props) {
//   const categories = props.categories;
//   const dropdownOptions = 
//   categories.map((option) =>
//   <option key={option}
//         value={option}>
//         {option}
//         </option>
//         );
//         return (
//           <Input value={this.props.value} onChange={this.props.onChange} type="select" name="categories" id="categoryDropdown">
//           {dropdownOptions}
//           </Input>
//         ).bind(this);
//       }

export default Dropdown;