import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';

class ResultItem extends Component {
  render() {
    return ( 
      <Card>
        {/* <img className="card-img-top" alt='stock' src={this.props.photo} /> */}
        <CardBody>
            <CardTitle>
              {this.props.itemName}
              <p>Price: ${this.props.price}</p> 
            </CardTitle>
            <CardText>
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