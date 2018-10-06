import React, { Component } from 'react';
import { Container, Col, Row } from "../../components/Layout";

class ResultItem extends Component {
  render() {
    return (
        <li className="list-group-item">
            <Container className="ResultList">
              <Row>
                <Col size="sm-9">
                  <p>{this.props.result.item}</p>  
                  <p>{this.props.result.price}</p> 
                  <p>{this.props.result.category}</p> 
                </Col>
                <Col size="sm-2">
                  <p>{this.props.result.store}</p>
                  <p>{this.props.result.address}</p>  
                  <p>{this.props.result.phone}</p> 
                </Col>   
              </Row>
            </Container>
        </li>
    );
  }
}

export default ResultItem;
