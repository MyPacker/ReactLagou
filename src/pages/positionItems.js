import React, { Component } from "react";
import "./positionItems.css"

class PositionItems extends Component{
   
    render(){
        let {item} = this.props;
        return(
            <li className="activeable list-item">
                <img src={"https://static.lagou.com/" + item.companyLogo} className="item-logo" alt="加载失败" />
                <div className="item-desc">
                    <h2 className="item-title">{item.companyName}</h2>
                    <p className="item-info">
                        <span className="item-pos">
                            {item.positionName}
                        </span>
                        <span className="item-salary">{item.salary}</span>
                    </p>
                    <p className="item-time">{item.createTime}</p>
                </div>
            </li>
        )
    }
}


export default PositionItems
