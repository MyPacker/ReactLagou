import React, { Component } from "react";
import "./logres.css";

import { 
    BrowserRouter as Router, 
    Route, 
    Switch,
    NavLink,
    Redirect
  } from 'react-router-dom';

class Register extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="container cleafix">
                <section className="form_container active" data-view="codeLogin">
                    <header className="form_header">
                        <h2>注册拉勾</h2>
                        <NavLink to="/login" className="brother_link">登录</NavLink>
                    </header>
                    <div className="input_label phone_wrapper">
                        <span className="area_code">0086</span>
                        <div className="area_code_list">
                            <dl className="code_list_main">
                                <dt>常用</dt>
                                <dd data-code="0086">中国</dd>
                                <dd data-code="00852">中国香港</dd>
                                <dd data-code="00886">中国台湾</dd>
                                <dd data-code="00853">中国澳门</dd>
                                <dd data-code="001">美国</dd>
                                <dt>A</dt>
                                <dd data-code="0061">澳大利亚</dd>
                                <dd data-code="00853">中国澳门</dd>
                            </dl>
                            <p className="tips">如果没有找到你所在的归属地，<br/>请拨打客服电话<a href="tel:4006282835">4006282835</a> 解决。</p>
                        </div>
                        <input type="text" placeholder="请输入常用手机号" className="input_text phone_input" />
                    </div>
                    <div className="input_label">
                        <input type="text" placeholder="请证明你不是机器人" className="input_text pcode_input" />
                        <img src="https://passport.lagou.com/vcode/create?from=register" width="2" height="2" className="pcode_img" alt="图片验证码" />
                        <a className="pcode_link">换一张</a>   
                    </div>
                    <div className="input_label clearfix">
                        <input type="text" className="input_text vcode_input" placeholder="请输入收到的验证码" />
                        <input type="button" className="input_text vcode_link" value="获取验证码" placeholder="获取验证码" />
                    </div>
                
                    <div className="input_label btn_group">
                        <input type="submit" className="submit_btn" value="注册" />
                    </div>
                    <div className="register_agreement">注册拉勾代表你已同意<a href="http://www.lagou.com/privacy.html" target="_blank">《拉勾用户协议》</a></div>
                </section>
            </div>
        )
    }
}

export default Register