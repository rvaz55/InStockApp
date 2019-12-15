
import React, {  } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, CardGroup,Jumbotron } from 'mdbreact';
import "./About.css";
//original: "./About.css"
import Sendy from "../../SendyPic.JPG";
import Melissa from "../../MelissaPic.JPG";
import Jocelyn from "../../JocelynPic.JPG";
import Raquel from ".././../../src/RaquelPic.JPG";
//original: ../../RaquelPic.JPG







class About extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron className= "jumbotronDiv">
                    <h1 className="h1-responsive display-3">Our Amazing Team!</h1>
                    {/* <hr className="my-2" /> */}
                </Jumbotron>
                <div className="entire-deck"> 
                
                <div className="second-row">
                        <CardGroup className="deck-picture" deck>

                            <Card>
                                <CardImage src={Jocelyn} alt="Card image cap" top hover overlay="white-slight" />
                                <CardBody>
                                    <CardTitle tag="h5">Jocelyn Tse</CardTitle>
                                    <CardText> Front End | Backend </CardText>
                                    <Button href="https://github.com/JocelynTse"className="btn btn-deep-purple" target="_blank" size="md">GitHub</Button>
                                    <br></br>
                                    <br></br>
                                    <Button href="https://www.linkedin.com/in/jocelyn-tse-17b299aa/" target="_blank" className="btn btn-deep-purple" size="md">LinkedIn</Button>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardImage src={Raquel} alt="Card image cap" top hover overlay="white-slight" />
                                <CardBody>
                                    <CardTitle tag="h5">Raquel Azcue</CardTitle>
                                    <CardText> Backend | User Authentication </CardText>
                                    <Button href="https://github.com/"className="btn btn-deep-purple" target="_blank" size="md">GitHub</Button>
                                    <br></br>
                                    <br></br>
                                    <Button href="https://www.linkedin.com/in/raquel-azcue-20813776/" target="_blank" className="btn btn-deep-purple" size="md">LinkedIn</Button>                                </CardBody>
                            </Card>



                        </CardGroup>
                    </div>
                    <div className="first-row">
                        <CardGroup className="deck-picture" deck>

                            <Card>
                                <CardImage src={Sendy} alt="Card image cap" top hover overlay="white-slight" />
                                <CardBody>
                                    <CardTitle tag="h5">Sendy Turcios</CardTitle>
                                    <CardText>Front End | UI Design</CardText>
                                    <Button href="https://github.com/sendyturcios" className="btn btn-deep-purple" target="_blank" size="md">GitHub</Button>
                                    <br></br>
                                    <br></br>
                                    <Button href="https://www.linkedin.com/in/sendy-turcios/" className="btn btn-deep-purple" target="_blank" size="md">LinkedIn</Button>

                                </CardBody>
                            </Card>

                            <Card>
                                <CardImage src={Melissa} alt="Card image cap" top hover overlay="white-slight" />
                                <CardBody>
                                    <CardTitle tag="h5">Melissa Siddoway</CardTitle>
                                    <CardText> Backend </CardText>
                                    <Button href="https://github.com/mlsidd"className="btn btn-deep-purple" target="_blank" size="md">GitHub</Button>
                                    <br></br>
                                    <br></br>
                                    <Button href="https://www.linkedin.com/in/melissa-siddoway-3770a3143/" target="_blank"className="btn btn-deep-purple" size="md">LinkedIn</Button>

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