import React,{Component} from 'react';

export default class extends Component{

    constructor(props){
        super(props)
        this.state = {
          dataSource:[]
        }
    }

    componentDidMount(){

      let arr = [
          {id:0,name:'aaaaa1'},
          {id:1,name:'aaaaa2'},
          {id:2,name:'aaaaa3'},
          {id:3,name:'aaaaa4'},
          {id:4,name:'aaaaa5'}
      ]

      let dataArr =arr.map(function(item){
          return <h1 key={item.id}>{item.name}</h1>
      })

      this.setState({
        dataSource:dataArr
      })

    }

    render(){
      console.log('render')
      return(
        <div>
          {this.state.dataSource}
        </div>
      )
    }
}
