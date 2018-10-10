import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';

class ResultItem extends Component {
  render() {
    return ( 
      <Card>
        <img className="card-img-top" alt='stock' src={this.props.photo} />
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
        </CardBody>
    </Card>
    );
  }
}

export default ResultItem;
