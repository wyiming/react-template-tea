import React,{Component} from 'react';
import Styles from './header.css';

const StyleSheets = {
  header:{
    color:'blue',
    fontSize:32
  }
}

export default class extends Component{
  render(){
    return (

      <div className={Styles.header} style={StyleSheets.header}>
        {this.props.title}
      </div>
    )
  }
}
