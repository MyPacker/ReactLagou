import React, { Component } from "react";
import axios from "axios";
import "./positions.css";
import Positions_con from "./positions_con";

class Positions extends Component{
    constructor(){
        super();
        this.state = {
            pageNumCurr: 1,
            emptyDisplay: "none",
            pageType: "positions"
        };
    }

    render(){
        let { posiList, pageNumCurr, emptyDisplay, pageType } = this.state;
        
        return(
        	<div>
                <div className="custom-info none" style={{display: "block"}}>
                    <span className="info">
                        10秒钟定制职位
                    </span>
                    <a className="go" href="/frontLogin.do" target="_self">
                        <em className="icon"></em>
                        <em className="text">去登录</em>
                    </a>
                </div>
                <Positions_con pageType={pageType} emptyDisplay={emptyDisplay} />
                <div id="copyright">
                    <p>©2015 lagou.com, all right reserved </p>
                    <div className="copyright-item">
                    <span className="phone active">移动版&nbsp;·&nbsp;</span>
                    <span className="computer">电脑版&nbsp;·&nbsp;</span>
                    <a href="#header">回顶部</a>
                    </div>
                </div>
            </div>
        )
    }

   

  

}


export default Positions
