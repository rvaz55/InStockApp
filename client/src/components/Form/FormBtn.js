import React from 'react';
import { Button } from 'mdbreact';

export const FormBtn = props => (

  <Button onClick = {props.onClick} style={{ float: "right", marginBottom: 10, color:"deep-purple" }} className="btn btn-success">
       Submit   
  </Button>
);


