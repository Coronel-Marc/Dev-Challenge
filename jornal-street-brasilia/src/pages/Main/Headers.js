import React from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';


class Headers extends React.Component{
    render(){
        return (
            <Navbar bg="secondary" variant="light">
            <Navbar.Brand href=""></Navbar.Brand>
            <Nav className="mr-auto">
              
            </Nav>
            <Form inline>
              <Button variant="dark" href="/NovoArtigo">Novo Artigo</Button>
            </Form>
            </Navbar>
        );
    }
}

export default Headers;