import React, { Component } from "react";
import "./logres.css";

import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';

class Login extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="container">
                <section className="form_container active">
                    <header className="form_header">
                        <h2>登录拉勾</h2>
                        <NavLink to="/register" className="brother_link">注册</NavLink>
                    </header>
                    <form className="form_body form_password" method="post">
                        <div className="input_label">
                            <input type="text" placeholder="请输入已验证的手机号或邮箱" className="input_text user_input" />
                        </div>
                        <div className="input_label">
                            <input type="password" className="input_text password_input" placeholder="请输入密码" />
                        </div>
                        <div className="input_label btn_group">
                            <input type="submit" className="submit_btn" value="登录" />
                        </div>
                    </form>
                    <footer className="form_footer">
                        <span className="signin_type_btn">手机号登录</span>
                    </footer>
                </section>
            </div>
        )
    }
}

export default Login