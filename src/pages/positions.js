import React, { Component } from "react";
import axios from "axios";
import "./positions.css"
import Positions_con from "./positions_con"

class Positions extends Component{
    constructor(){
        super();
        this.pageLoad()
        this.state = {
            posiList: [],
            pageNumCurr: 1,
            loadMoreText: "加载更多" 
        }
    }

    render(){
        let {posiList} = this.state;
        // var clist = posiList.map(function(ele, index){
        //     return <PositionItems item={ele} key={index} ></PositionItems>;
        // })
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
                <ul className="list">
                    <Positions_con posiList={posiList} />
                    <li className="activeable list-more" onClick={()=>{this.bundleMore()}}>{this.state.loadMoreText}</li>
                </ul>
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

    pageLoad(){
        let _this = this;
        axios.get("/listmore.json?pageNo=1&pageSize=15").then(function(response){
            var posiList = response.data.content.data.page.result;
            _this.setState({
                posiList: posiList
            })
        })
    }

    bundleMore(){
        var _this = this;
        this.state.pageNumCurr++
        this.setState({
            pageNumCurr: this.state.pageNumCurr,
            loadMoreText: "加载中......"
        })
        axios.get("/listmore.json?pageNo="+ _this.state.pageNumCurr +"&pageSize=15").then(function(res){
            console.log(_this.state.pageNumCurr)
            var posiList = res.data.content.data.page.result;
            console.log(posiList)
            _this.setState({
                posiList: [..._this.state.posiList, ...posiList],
                loadMoreText: "加载更多"
            })
            
        })
    }

}


export default Positions
