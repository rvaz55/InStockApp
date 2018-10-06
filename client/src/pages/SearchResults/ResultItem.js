import React, { Component } from 'react';

class ResultItem extends Component {
  render() {
    return (
      <div className="ResultItem">
        <li> {this.props.result.name}  
             {this.props.result.price} 
             {this.props.result.category} 
             {this.props.result.store}  
        </li>
      </div>
    );
  }
}

export default ResultItem;
