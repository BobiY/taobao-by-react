import $ from "jquery";
import React,{Component} from "react";
import {render} from "react-dom";
import Left from "../Components/left";
import Center from "../Components/center";
import Right from "../Components/right";
import "../style/index.css";



class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      top:0,
      item:{},
      num:0,
      divBox:[
        {
          title:"我是标题1",
          content:"我是内容"
        },
        {
          title:"我是标题2",
          content:"我是内容"
        }
      ]
    };
    this.getTop = this.getTop.bind(this);
  }
  getTop(val){
    this.setState({
      top:val
    })
  }
  getItem(val,num){
    this.setState({
      item:val,
      num
    })
  }
  getCurrent(num,val1,val2){
    var div = this.state.divBox;
    div[num].title = val1;
    div[num].content = val2;
    this.setState({
      divBox:div
    })
  }
  render(){
    return(
      <div className = "box">
         <Left getTop = {this.getTop}/>
         <Center top = {this.state.top} getItem = {this.getItem.bind(this)} divBox = {this.state.divBox}/>
         <Right item = {this.state.item} getCurrent = {this.getCurrent.bind(this)} num = {this.state.num}/>
      </div>
    )
  }
};



render( <App />,document.getElementById('app') )
