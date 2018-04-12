import React, { Component } from "react";
import "./positions.css";
import PositionsCon from "./positionsCon";

class Positions extends Component{
    constructor(){
        super();
        this.state = {
            pageNumCurr: 1,
            emptyDisplay: "none",
            pageType: "positions",
            loginStateInfo: true
        };
    }

    componentWillMount(){
        var LoginUser = localStorage.getItem("LoginUser")
        if(LoginUser){
            this.setState({
                loginStateInfo: false
            })
            return
        }else{
            // this.props.history.push("/login")
        }
    }

    render(){
        let { emptyDisplay, pageType, loginStateInfo } = this.state;
        
        return(
        	<div>
                <div className="custom-info none" style={{display: "block"}}>
                    <span className="info">
                        10秒钟定制职位
                    </span>
                    <span className="go" onClick={()=>{this.handleTargetLogin()}}>
                        <em className="icon"></em>
                        <em className="text">{ loginStateInfo ? "去登录" : "编辑" }</em>
                    </span>
                </div>
                <PositionsCon pageType={pageType} emptyDisplay={emptyDisplay}></PositionsCon>
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

    handleTargetLogin(){
        var loginStateInfo = this.state.loginStateInfo;
        if(loginStateInfo){
            this.props.history.push("/login")
        }else{
            // this.props.history.push("/login")
            console.log("你已经登录了哦~~~~~~~~~~~~~")
        }
    }
   

  

}


export default Positions
