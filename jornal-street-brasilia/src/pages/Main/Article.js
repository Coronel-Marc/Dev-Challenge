import React from 'react';
import {Card} from 'react-bootstrap';
import api from '../../Api';
import moment from 'moment';


class Article extends React.Component{

    state={
        artigos:[],
    }

    

    async componentDidMount(){
        const response = await api.get('/');
        this.setState({artigos: response.data});
    }
    render(){
        const {artigos} = this.state;
        console.log(artigos);



        return(
            <div className="cardColumns">
                <div className="containerHeader">     
                    <br/>
                    <h1>_Jornal Street Brasília_</h1>
                    <h4>-Noticias de Brasília e do mundo-</h4>
                    <br/>
                    <hr/>
                </div>
                <div className="grid-container">
                    {artigos.map(artigo => (
                        <div className="grid-item" >
                        <Card key={artigo._id} bg={'Light'.toLowerCase()} className="card">
                            <Card.Header ><b>{artigo.titulo}</b></Card.Header>
                            <Card.Body>
                                
                                <Card.Text>{artigo.conteudo}</Card.Text>
                                    
                            </Card.Body>
                            <Card.Footer className="text-muted"><em>Postado em: {moment(artigo.createdAt).format("DD/MM/YYYY, h:mm:ss a")}</em></Card.Footer>
                        </Card>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Article;