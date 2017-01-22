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
    $(".tu").each(function (index,val) {
         var topTem = $(this).offset().top;
         arr.push(topTem-top)
    })
    for (var i = 0; i < arr.length-1; i++) {
       if(arr[i] <= 0 && arr[i+1] >=0) {

           var arrTem = this.state.divBox;
           arrTem.splice(i+1,0,{text:"我是插入的"+i})
           console.log(arrTem,i);
           this.setState({
             divBox:arrTem
           })
       }
    }
  }
};
