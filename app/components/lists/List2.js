import React,{Component} from 'react';
import 'whatwg-fetch';
import Datas from './data.json';
import Styles from './style.css';
const styles = {
  Item:{
    height:100,
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#eee',
    marginTop:10
  },
  ItemAvatar:{
    flex:1,
    height:100,
    width:100
  },
  ItemName:{
    flex:2
  }
}

export default class extends Component{

    constructor(props){
        super(props)
        this.state = {
          dataSource:[]
        }
    }

    componentDidMount(){
      console.log(Datas)
      fetch('https://api.github.com/users')
      .then(function(response) {
        // console.log(response)
        return response.json()
      }).then(function(json){

        let dataArr =Datas.map(function(item){
            return <div key={item.id} style={styles.Item}>
                    <div style={styles.ItemAvatar}><img  className={Styles.itemAvatar} src={item.avatar_url} /></div>
                    <div style={styles.ItemName}>{item.login}</div>
                    </div>
        })

        this.setState({
          dataSource:dataArr
        })

      }.bind(this))

    }

    deleteIt(arg){
      console.log(arg)
    }

    render(){
      return(
        <div>
          {this.state.dataSource}
        </div>
      )
    }
}
