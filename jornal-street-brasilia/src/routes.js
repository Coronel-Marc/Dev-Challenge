import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main';
import NovoArtigo from './pages/NovoArtigo';

class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/NovoArtigo" component={NovoArtigo}/>
                    
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;