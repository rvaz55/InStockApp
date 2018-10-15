import React from 'react';
import {Modal,ModalHeader,ModalBody,Form,FormGroup,Label,Input,Button} from 'reactstrap';
import "./additemModal.css";
import DropdownInput from "../CategoryOptions";

const AddItemModal = (props) => {
    const onClick = props.onClick;
    const isOpen = props.isOpen;
    const toggle = props.toggle;
    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle} >
          <ModalHeader toggle={toggle}>Add item to your store's stock</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="itemName"
                  id="item"
                  placeholder="Add item"
                  onChange={props.onChange}
                />
                <Label for="price">Price</Label>
                <Input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Price"
                  onChange={props.onChange}
                />
                <Label for="category">Category</Label>
                <DropdownInput onChange={props.onChange}/>
                <Button onClick={onClick} color="dark" style={{ marginTop: '2rem' }} block>
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