import React,{Component} from "react";
import $ from "jquery";

export default class Center extends Component{
  constructor(props) {
    super(props);
    this.createDiv = this.createDiv.bind(this);
    this.state = {
      divBox:[
        {
          text:"图"
        },
        {
          text:"图"
        }
      ]
    }
  }
  createDiv(){
    var aa = [];
    for (var i = 0; i < this.state.divBox.length; i++) {
      aa.push(<div className = "tu" key = {i}>
         {`${this.state.divBox[i].text}${i}`}
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
  componentWillReceiveProps(nextProps){
    var top = nextProps.top;
    var arr = [];
    var arrTem = this.state.divBox;
    var length = this.state.divBox.length;
    $(".tu").each(function (index,val) {
         var topTem = $(this).offset().top;
         arr.push(topTem-top)
    })
    for (var i = 0; i < arr.length-1; i++) {
       if(arr[i] <= 0 && arr[i+1] >=0) {
           arrTem.splice(i+1,0,{text:"我是插入的"+i})
       }
    }
    if(length == this.state.divBox.length){
      var num = 0;
      for (var i = 0; i < arr.length; i++) {
         if(arr[i] >= 0 || arr[i] <= 0){
           num++;
         }
      }
      console.log(num,arr.length);
      if(num == arr.length && arr[0] >= 0){
           arrTem.splice(0,0,{text:"我是插入的"+i})
      }else{
           arrTem.splice(arr.length,0,{text:"我是插入的"+i})
      }
    }
    this.setState({
      divBox:arrTem
    })
  }
};
