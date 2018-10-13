import React from 'react';
import { Button } from 'reactstrap';

const AddItemBtn = (props) => {
    const onClick = props.onClick;
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={onClick}
        >
          Add Item
        </Button>
      </div>
    );
  }

export default AddItemBtn;