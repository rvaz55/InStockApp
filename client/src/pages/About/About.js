
import React, { Link } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, CardGroup,Jumbotron } from 'mdbreact';
import "./About.css";
import Sendy from "../../SendyPic.JPG";
import Melissa from "../../MelissaPic.JPG";
import Jocelyn from "../../JocelynPic.JPG";
// import Raquel from "../../RaquelPic.JPG";







class About extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron className= "jumbotronDiv">
                    <h1 className="h1-responsive display-3">Our Amazing Team!</h1>
                    {/* <hr className="my-2" /> */}
                </Jumbotron>
                <div className="entire-deck">
                    <div className="first-row">
                        <CardGroup className="deck-picture" deck>

                            <Card>
                                <CardImage src={Sendy} alt="Card image cap" top hover overlay="white-slight" />
                                <CardBody>
                                    <CardTitle tag="h5">Sendy Turcios</CardTitle>
                                    <CardText>Front End | UI Design</CardText>
                                    <Button tag={Link} to="google.com" className="btn btn-deep-purple" size="md">GitHub</Button>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardImage src={Melissa} alt="Card image cap" top hover overlay="white-slight" />
                                <CardBody>
                                    <CardTitle tag="h5">Melissa Siddoway</CardTitle>
                                    <CardText> Backend </CardText>
                                    <Button className="btn btn-deep-purple" size="md">GitHub</Button>
                                </CardBody>
                            </Card>



                        </CardGroup>

                    </div>

                    <div className="second-row">
                        <CardGroup className="deck-picture" deck>

                            <Card>
                                <CardImage src={Jocelyn} alt="Card image cap" top hover overlay="white-slight" />
                                <CardBody>
                                    <CardTitle tag="h5">Jocelyn Tse</CardTitle>
                                    <CardText> Front End | Backend </CardText>
                                    <Button className="btn btn-deep-purple" size="md">GitHub</Button>
                                </CardBody>
                            </Card>

                            <Card>
                                {/* <CardImage src={Raquel} alt="Card image cap" top hover overlay="white-slight" /> */}
                                <CardBody>
                                    <CardTitle tag="h5">Raquel Azcue</CardTitle>
                                    <CardText> Backend | User Authentication </CardText>
                                    <Button className="btn btn-deep-purple" size="md">read more</Button>
                                </CardBody>
                            </Card>



                        </CardGroup>
                    </div>
                </div>

            </div>
                
                );
    }
}


export default About;