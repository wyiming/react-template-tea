import React,{Component} from 'react';

export default class extends Component{

    constructor(props){
       super(props)
       this.state = {
          timer:0
       }
    }
    clickFunc(){
      console.log(this)
      this.setState({
        timer:this.state.timer+1
      })
    }

    render(){
      return(
        <div>
            <h1>{this.state.timer}</h1>
            <button onClick={this.clickFunc.bind(this)}>click</button>
        </div>
      )
    }
}
