import React, { Component } from 'react';
import { Container, Col, Row } from "../../components/Layout";
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class ResultItem extends Component {
  render() {
    return ( 
      <Card>
        <CardImage className="img-fluid" src="" waves />
        <CardBody>
            <CardTitle className="text-center">
              {this.props.itemName}
              <p>Price:  {this.props.price}</p> 
            </CardTitle>
            <CardText className="text-center">
              {this.props.store}
              <p>{this.props.address}</p>
              <p>{this.props.phone}</p>
              <p>{this.props.category}</p>
            </CardText>
            <Button href="#">Button</Button>
        </CardBody>
    </Card>
    );
  }
}

export default ResultItem;
