import React, { Component } from 'react';
import { Container, Col, Row } from "../../components/Layout";
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class ResultItem extends Component {
  render() {
    return ( 
      <Card>
        <CardImage className="img-fluid" src="" waves />
        <CardBody>
            <CardTitle>
              {this.props.result.item}
              <p>Price:  {this.props.result.price}</p> 
            </CardTitle>
            <CardText>
              {this.props.result.store}
              <p>{this.props.result.address}</p>
              <p>{this.props.result.phone}</p>
              <p>{this.props.result.category}</p>
            </CardText>
            <Button href="#">Button</Button>
        </CardBody>
    </Card>
    );
  }
}

export default ResultItem;
