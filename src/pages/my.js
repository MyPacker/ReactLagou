import React, { Component } from "react";
import "./my.css";
import { 
  NavLink
} from 'react-router-dom';

class My extends Component{
    constructor(){
        super()
        this.state = {
            loginInfoOnOff: false
        }
    }

    componentWillMount(){
        if(this.props.history.location.state){
            localStorage.setItem("LoginUser", this.props.history.location.state.LoginUser);
            this.setState({
                loginInfoOnOff: true,
            })
        }
        if(localStorage.getItem("LoginUser")){
            this.setState({
                loginInfoOnOff: true,
            })
        }
    }

    render(){
        
        let { loginInfoOnOff, LoginUser } = this.state;
        var myuser = localStorage.getItem("LoginUser");
        console.log(myuser);
        return(
	       <div>
                <div className="logininfo">
                    <div className="nologin center" style={{"display": ( !loginInfoOnOff ? "block" : "none" )}}>
                        <NavLink to="/login" className="loginbut">登录 / 注册</NavLink>
                    </div>
                    <div className="haslogin center" style={{"display": ( loginInfoOnOff ? "block" : "none" )}}>
                        <a className="button" href="http://www.lagou.com/center/preview.html" target="_self"> 简历&gt; </a>
                        <div className="headcon">
                            <img className="headpic" src="//static.lagou.com/i/image/M00/4F/D2/CgpEMllveC6AI10cAAVq9MnuZtg192.jpg" />
                        </div>
                        <div className="name">{myuser}</div>
                    </div>
                </div>
                <div className="buttons">
                    <a className="button deliver" href="#">
                        <span>投递</span>
                    </a>
                    <a className="button interview" href="#">面试</a>
                    <a className="button invitation" href="#">
                        <span>邀约</span>
                    </a>
                    <a className="button collect" href="#">收藏</a>
                </div>
                <a className="logout" href="#" onClick={()=>{this.Logout()}} style={{"display": ( loginInfoOnOff ? "block" : "none" )}}>退出登录</a>
           </div>
        )
    }

    Logout(){
        this.setState({
            loginInfoOnOff: false
        })
    }
}

export default My