import "./FooterPage.css";
import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import ContactUsModal from "../../components/ContactUsModal";


class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="unique-color-dark" className="font-small pt-4 mt-4">
            <div className="footer-container">
                <Container fluid className="text-center text-md-left">
                    <Row>
                    <Col sm="4">
                        <div className ="col-4">                  
                            {/* <h6 className="title">Contact Us</h6> */}
                            
                            <ContactUsModal />
                            <h6 className="text-center">instockapp@instock.com</h6>
                        </div>  
                    </Col>
                    <Col sm="4">
                    {/* empty column here*/}
                    </Col>
                    <Col sm="4">
                        
                        <br></br>
                        <a href ="#!" className="fb-ic">
                            <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <a href ="#!" className="tw-ic">
                            <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <a href="#!" className="ins-ic">
                            <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                    </Col>
                    </Row>
                </Container>
                
                </div>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> InStock.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}


export default FooterPage;
