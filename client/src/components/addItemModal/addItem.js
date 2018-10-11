import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const AddItemModal = (props) => {
    const onClick = props.onClick;
    const onChange = props.onChange;
    const isOpen = props.isOpen;
    const toggle = props.toggle;
    const onSubmit = props.onSubmit;
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={onClick}
        >
          Add Item
        </Button>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add item to your store's stock</ModalHeader>
          <ModalBody>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add item"
                  onChange={onChange}
                />
                <Label for="price">Price</Label>
                <Input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Price"
                  onChange={onChange}
                />
                <Label for="category">Category</Label>
                <Input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="What category?"
                  onChange={onChange}
                />
                <Label for="store">Store</Label>
                <Input
                  type="text"
                  name="store"
                  id="store"
                  placeholder="Store"
                  onChange={onChange}
                />
                <Label for="item">Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  onChange={onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }

export default AddItemModal;