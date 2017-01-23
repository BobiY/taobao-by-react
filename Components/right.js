import React,{Component} from "react";
import $ from "jquery";


export default class Right extends Component{
  constructor(props) {
     super(props);
     this.state = {
       item:{
         title:"",
         content:""
       }
     }
  }
  handleChange(e){
     this.setState({
       item:{
         title:this.refs.title.value,
         content:this.refs.content.value
       }
     })
     this.props.getCurrent(this.props.num,this.refs.title.value,this.refs.content.value)
  }
  componentWillReceiveProps(nextProps) {
       this.setState({
         item:{
           title:nextProps.item.title,
           content:nextProps.item.content
         }
       })
    }
  render(){
    return(
       <div className = "right">
          <div className = "rConent">
            {"标题   "}
            <input type = "text" onChange = {this.handleChange.bind(this)} value = {this.state.item.title || ""} ref = "title"/>
          </div>
          <div className = "rConent">
            <span>{"内容"}</span>
            <textarea onChange = {this.handleChange.bind(this)} value = {this.state.item.content || ""} ref = "content"/>
          </div>
       </div>
    )
  }
  componentDidMount(){
     let height = $(".left").outerHeight();
     $(".right").css({height:height});
  }
}
