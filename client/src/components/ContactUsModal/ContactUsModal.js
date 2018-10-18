import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import "./ContactUsModal.css";

class ContactUsModal extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <Button className ="btn contact-modal-button" color="transparent" onClick={this.toggle}>Contact Us</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
              <div className="modal-header primary-color white-text">
                <h3 className="modal-title">
                  <Fa className="fa fa-pencil fa-2x"/>Contact Form</h3>
                <button type="button" className="close" onClick={this.toggle}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
                <Input size="sm" label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input size="sm" label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
                <Input size="sm" type="textarea" rows="2" label="Your message" icon="pencil"/>
              </ModalBody>
              <ModalFooter>
                <Button color="deep-purple" onClick={this.toggle}>Close</Button>{' '}
                <Button className="save-button">Save changes</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
  
      </Container>
    );
  }
};

export default ContactUsModal;