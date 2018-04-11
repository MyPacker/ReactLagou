import React, { Component } from "react";
import axios from "axios";
import "./positions.css"
import PositionItems from "./positionItems"

class PositionsCon extends Component{
    constructor(){
        super()
    }

   
    render(){
        let {posiList, emptyDisplay} = this.props;
        var clist;
        if(posiList.length){
            clist = posiList.map(function(ele, index){
                return <PositionItems item={ele} key={index} ></PositionItems>;
            })
        } else {
            clist = <EmptyInfo emptyDisplay={emptyDisplay} />
        }
        
        return(
            <div>
                {clist}
            </div>
        )
    } 

    componentWillMount(){
        console.log("ComponentWillMount")
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