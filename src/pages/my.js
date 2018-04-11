import React, { Component } from "react";
import "./my.css";
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';

class My extends Component{
    constructor(){
        super()
    }

    render(){
        return(
	       <div>
                <div className="logininfo">
                    <div className="nologin center">
                        <NavLink to="/login" className="loginbut">登录 / 注册</NavLink>
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
           </div>
        )
    }
}

export default My