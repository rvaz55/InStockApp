import React from 'react';
import { Card, CardText, CardTitle, Button } from 'reactstrap';

function InfoWindow(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
          <CardTitle>
            put store name here
          </CardTitle>
          <CardText component="p">
          put address here
          </CardText>
          <Button size="small" color="primary">
            Get Driving Direction
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
      </Card>
    </div>
  );
}

export default InfoWindow;