import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap'
import "../styles/header.css";

const Header = props => {
    return (
        <div>
            {/* <Container> */}


                <Navbar bg="dark" expand="lg" fixed="top">
                    <Row>
                        <Col>
                            <Navbar.Brand href="#home">Movie Time Machine</Navbar.Brand>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Are you ready for a blast from the past?</p>
                        </Col>
                        <Col>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Col>
                    </Row>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>

                                </Nav>

                            </Navbar.Collapse> */}
                </Navbar>
                    {/* </Col> */}
                {/* </Row> */}
            {/* </Container > */}
        </div >
    )
}

export default Header;