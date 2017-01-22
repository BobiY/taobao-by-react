import $ from "jquery";
import React,{Component} from "react";
import {render} from "react-dom";
import Left from "../Components/left";
import Center from "../Components/center";
import "../style/index.css";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      top:0
    };
    this.getTop = this.getTop.bind(this);
  }
  getTop(val){
    this.setState({
      top:val
    })
  }
  render(){
    return(
      <div className = "box">
         <Left getTop = {this.getTop}/>
         <Center top = {this.state.top}/>
         <div className = "right">{"这里是右边的部分"}</div>
      </div>
    )
  }
};

render(<App /> ,document.getElementById('app'));
