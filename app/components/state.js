import React,{Component} from 'react';

export default class extends Component{

    constructor(props){
       super(props)
       this.state = {
          timer:0
       }

      //call apply bind
       var self = this;

       setInterval(function(){

          // self.state.timer +=1;
          // console.log(this)
          this.setState({
            timer:this.state.timer+1
          })

       }.bind(this),1000)
    }





    render(){
      return(
        <div>
            <h1>{this.state.timer}</h1>
        </div>
      )
    }
}
