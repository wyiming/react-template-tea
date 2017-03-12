import React,{Component} from 'react';

import MyHeader from './header/MyHeader';
import StateDemo from './state';
import ClickDemo from './click';
import ListDemo from './lists/Lists';
import ListDemo2 from './lists/List2';

export default class extends Component{

  render(){
    return(
      <div>
          <MyHeader title="首页"/>
          <StateDemo/>
          <ClickDemo/>
          <ListDemo2/>
      </div>
    )
  }
}


// module.exports = App;
// module.exports.App = App;
