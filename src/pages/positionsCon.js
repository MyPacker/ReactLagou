import React, { Component } from "react";
import axios from "axios";
import "./positions.css"
import PositionItems from "./positionItems";
import Loadmore from "./loadmore";

class PositionsCon extends Component{
    constructor(){
        super();
        this.state = {
            posiList: [],
            pageNumCurr: 1
        }
        this.setStateOne = this.setStateOne.bind(this);
        this.setStateSec = this.setStateSec.bind(this);
    }

    componentWillMount(){
        let { posiList, pageType, showhinde } = this.props;
        console.log(posiList)
        console.log(pageType)
        if(pageType === "positions"){
            console.log(pageType)
            var _this = this;
            axios.get("/listmore.json?pageNo=1&pageSize=15").then(function(response){
                _this.setState({
                    posiList: response.data.content.data.page.result,
                    showhinde: true
                })
            })
        } 
    }

    componentWillReceiveProps(){
        console.log(this.props.posiList)
        if (this.props.pageType === "search") {
            this.setState({
                posiList: this.props.posiList,
                showhinde: false
            })

        }
    }

   


    render(){
        let {pageNumCurr, posiList, showhinde} = this.state;
        let {emptyDisplay} = this.props; 
        
        var clist;
        
        console.log(posiList)
        if(posiList.length>0){
            clist = this.state.posiList.map(function(ele, index){
                return <PositionItems item={ele} key={index} ></PositionItems>;
            })
        } else {
            clist = <EmptyInfo emptyDisplay={emptyDisplay} />
        }
        
        return(
            <div>
                <ul className="list">
                    {clist}
                </ul>
                <Loadmore pageNumCurr={pageNumCurr} showhinde={showhinde} setStateOne={this.setStateOne} setStateSec={this.setStateSec} />
            </div>
            
        )
    } 

   
    setStateOne(newpageNumCurr){
        this.setState({
            pageNumCurr: newpageNumCurr,
        })
    }
    setStateSec(newposiList){
        var _this = this;
        this.setState({
            posiList: [..._this.state.posiList, ...newposiList],
            loadMoreText: "加载更多"
        })
    }


}

class EmptyInfo extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <li className="list-empty" style={{display: this.props.emptyDisplay}}>
                <span className="icon"></span>
                <span className="text">拉勾上暂时没有这样的职位</span>
            </li>
        )
    }
}


    
export default PositionsCon