import React from 'react';
import Headers from './Headers';
import Article from './Article';
import './index.css';


class Main extends React.Component{

    render(){
      return (
        <div className="Main">
            <Headers/>
            <Article/>
        </div>
      );
    }
  }
  
  export default Main;