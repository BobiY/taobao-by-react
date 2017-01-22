import React,{Component} from "react";
import $ from "jquery";


export default class Left extends Component{
  constructor(props) {
    super(props);
    this.moreTab = this.moreTab.bind(this);
  }
  moreTab(){
    var tabs = [];
    for (var i = 0; i < 21; i++) {
      tabs.push(<Tab key = {i}/>)
    }
    return tabs;
  }
  render(){

    return(
      <div className = "left">
        {this.moreTab()}
      </div>
    )
  }
  componentDidMount(){
    let t = this;
    $(".tab").mousedown(function (e) {
       var left = $(this).offset().left,
           top = $(this).offset().top,
           firstX = e.pageX,
           firstY = e.pageY,
           x1 = firstX-left,
           y1 = firstY-top,
           topf = 0,
           num = 0,
           tab = $(this).clone();
       tab.css({top:top-10,left:left,position:"absolute"})
       $("body").append(tab);
       $(document).mousemove(function (e) {
          var currentX = e.pageX,
              currentY = e.pageY,
              currentLeft = currentX - x1;
              topf = currentY - y1;
          tab.css({top:topf,left:currentLeft,position:"absolute",margin:0});
       })
       $(document).mouseup(function(){
         $(document).unbind("mousemove");
         //在这将最后的top值传递出去，在center中进行集中地处理
         if(num == 0){
           t.props.getTop(topf);
           num++;
         }
         tab.remove();
       })
    })
  }
};


//每个小选项卡组件

class Tab extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className = "tab">
          <div className = "img"></div>
          <p className = "title"></p>
      </div>
    )
  }
};
