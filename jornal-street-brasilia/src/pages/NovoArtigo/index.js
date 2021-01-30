import React from 'react';
import axios from 'axios';
import {Navbar, Nav, Form, Button, Jumbotron, Container} from 'react-bootstrap';



class NovoArtigo extends React.Component{

    state ={
        titulo: '' ,
        conteudo:''
    };

    handleChange = event => {
        this.setState({titulo: event.target.value});
    }
    handleChange2 = event => {
        this.setState({conteudo: event.target.value});
    }
    

    handleSubmit = event =>{
        event.preventDefault();

        axios({
            method: 'POST',
            url: 'http://localhost:8080/artigo',
            data: {
                titulo: this.state.titulo,
                conteudo: this.state.conteudo,
            }
        });
        window.history.back()

    }

    

    
    render(){
        



        return (
            <div>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Início</Nav.Link>
                </Nav>
                <Form inline>
                <Button variant="dark" href="/NovoArtigo"></Button>
                </Form>
            </Navbar>
    
    
              <Jumbotron fluid>
                  <Container>
                      <h1>Artigos</h1>
                      <hr/>
                      <h2>Novo Artigo</h2>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group>
                              <Form.Label >Título</Form.Label>
                              <Form.Control 
                              type="text" 
                              id="titulo" 
                              name="titulo" 
                              maxLength="85" 
                              placeholder="Insira aqui o título do artigo (Máximo de 85 caracteres)"
                              onChange={this.handleChange} />
                          </Form.Group>
    
                          <Form.Group>
                              <Form.Label >Conteudo do artigo</Form.Label>
                              <Form.Control 
                              type="text" 
                              id="conteudo" 
                              name="conteudo" 
                              maxLength="380" 
                              placeholder="Insira aqui a descrição do artigo (Máximo de 380 caracteres)"
                              onChange={this.handleChange2} />
                          </Form.Group>
                          <Button variant="dark" type="submit" onSubmit={this.handleSubmit2} >
                              Postar artigo
                          </Button>
                      </Form>
                  </Container>
               </Jumbotron>
              </div>
          );
    }
}
    

  export default NovoArtigo;