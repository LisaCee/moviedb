import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap'
import "../styles/header.css";
import Jumbo from "./Jumbo";
import Splash from "./Splash"

const Header = props => {
    return (
        <div>
            <Container className="fixed-top">
                <Navbar bg="dark" expand="lg">
                    <Row>
                        <Col>
                            <Navbar.Brand href="#home">Movie Time Machine</Navbar.Brand>

                            <p>Are you ready for a blast from the past?</p>
                        </Col>
                    </Row>
                    <Row>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Row>
                </Navbar>
            </Container >
            <Splash />
        </div >
    )
}

export default Header;