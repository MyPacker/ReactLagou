import React, { Component } from "react";
import axios from "axios";
import "./positions.css";

class Loadmore extends Component{
    constructor(){
        super();
        this.state = {
            loadMoreText: "加载更多",
            btnSisabled: true
        }
    }

    render(){
        let { showhinde } = this.props
        return(
            <div className="activeable list-more" style={{ display: (showhinde ? "block" : "none" ) }} onClick={()=>{this.bundleMore()}}>{this.state.loadMoreText}</div>
        )
    }

    componentWillMount(){
        console.log(this.props.posiList)
        // if(this.props.posiList){
        //     this.setState({
        //         showhinde: false
        //     })
        // }
    }

    componentDidMount(){
        this.setState({
            pageNumCurr: this.props.pageNumCurr
        })
    }

    bundleMore(){
        let { btnSisabled } = this.state;
        // 执行前先判断，避免用户在加载过程中多次点击按钮
        if(btnSisabled){
            this.state.pageNumCurr++;
            this.setState({
                loadMoreText: "加载中......",
                btnSisabled: false
            })
            this.props.setStateOne(this.state.pageNumCurr);
            var _this = this;
            axios.get("/listmore.json?pageNo="+ this.state.pageNumCurr +"&pageSize=15").then(function(res){
                var posiList = res.data.content.data.page.result;
                console.log(posiList)
                _this.props.setStateSec(posiList)
                _this.setState({
                    loadMoreText: "加载更多",
                    btnSisabled: true
                })
            })
        } else {
            return
        }
        
    }
}


export default Loadmore