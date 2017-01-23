import React,{Component} from "react";
import $ from "jquery";

var lastTop = 0;
var currentTop = 0;
export default class Center extends Component{
  constructor(props) {
    super(props);
    this.createDiv = this.createDiv.bind(this);
    this.state = {
      num:0
    }
  }
  changeDate(val,num){
    this.props.getItem(val,num)
  }
  createDiv(){
      var aa = [];
      for (var i = 0; i < this.props.divBox.length; i++) {
        aa.push(<div className = "tu" key = {i} onClick = {this.changeDate.bind(this,this.props.divBox[i],i)}>
           <p>{this.props.divBox[i].title}</p>
           <p>{this.props.divBox[i].content}</p>
        </div>)
     }
     return aa;
  }
  render(){
    return(
       <div className = "center">
          <div className = "content">
              {this.createDiv()}
          </div>
       </div>
    )
  }
  componentDidUpdate(){
    if(currentTop !== lastTop){
      lastTop = currentTop;
      this.props.getItem(this.state.divBox[this.state.num],this.state.num)
    }
  }
  componentWillReceiveProps(nextProps){
    var top = nextProps.top;
    currentTop = top;
    var arr = [];
    var numTem = 0
    var arrTem = this.props.divBox;
    var length = this.props.divBox.length;
    $(".tu").each(function (index,val) {
         var topTem = $(this).offset().top;
         arr.push(topTem-top)
    })
    if(currentTop !== lastTop){
        for (var i = 0; i < arr.length-1; i++) {
           if(arr[i] <= 0 && arr[i+1] >=0) {
               arrTem.splice(i+1,0,{title:"1111",content:"2222"});
               numTem = i+1;
           }
        }
        if(length == this.props.divBox.length){
          var num = 0;
          for (var i = 0; i < arr.length; i++) {
             if(arr[i] >= 0 || arr[i] <= 0){
               num++;
             }
          }
          if(num == arr.length && arr[0] >= 0){
               arrTem.splice(0,0,{title:"444",content:"777"});
               numTem = 0;
          }else{
               arrTem.splice(arr.length,0,{title:"888",content:"9999"});
               numTem = arr.length;
          }
        }
        this.setState({
          divBox:arrTem,
          num:numTem
        })
      }
  }
};
