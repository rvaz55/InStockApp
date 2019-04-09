import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';

class ResultItem extends Component {
  render() {

    //console.log("happens in the resultsItem.js page underneath the render()")
    //console.log(this.props)

    return ( 
      <Card>
        {/* <img className="card-img-top" alt='stock' src={this.props.photo} /> */}
        <CardBody>
            <CardTitle>
              {this.props.itemName}
              <p>Price: ${this.props.price}</p> 
            </CardTitle>
            <CardText>
              <p>StoreID: {this.props.store}</p>
              <p>Using the Store ID as a placeholder for the lat and long coordinates for the item</p>
              <p>The coords can then be passed to Maps API (theoretically!)</p>
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