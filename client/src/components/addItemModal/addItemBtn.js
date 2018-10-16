import React from 'react';
import "./additemModal.css";
import { Button } from 'mdbreact';


const AddItemBtn = (props) => {
    const onClick = props.onClick;
    return (
      <div className="add-button">
        <Button
          color="indigo darken-4"
          style={{ marginBottom: '2rem' }}
          onClick={onClick}
        >
          Add Products
        </Button>
      </div>
    );
  }

export default AddItemBtn;