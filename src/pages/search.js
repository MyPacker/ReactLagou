import React, { Component } from "react";
import "./search.css";
import SearchHistory from "./searchHistory";
import SearchCity from "./searchCity";
import PositionsCon from "./positionsCon"
import axios from "axios";

class Search extends Component{
    constructor(){
        super();
        this.state = {
            historyList: JSON.parse(localStorage.getItem("history_list")) || [],
            cityDisplay: "none",
            historyDisplay: "block",
            emptyDisplay: "none",
            selectCityName: "成都",
            positionName: "",
            posiList: [],
            pageNumCurr: 1,
            pageType: "search"
        }
        this.handleHistory = this.handleHistory.bind(this);
        this.handelHisState = this.handelHisState.bind(this);
        this.handelDele = this.handelDele.bind(this);
        this.selectCityList = this.selectCityList.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.searchPublic = this.searchPublic.bind(this);
        this.setStateOne = this.setStateOne.bind(this);
        this.setStateSec = this.setStateSec.bind(this);
    }

    render(){
        var _this = this;
        let { historyList, posiList, emptyDisplay, selectCityName, historyDisplay, cityDisplay, pageType, showhinde } = this.state;
        var hisList = historyList.map(function(ele, index){
            return <SearchHistory item={ele} city={selectCityName} ondele={_this.handelDele} onsearhistory={_this.searchPublic} _id={index} key={index}></SearchHistory>
        });
        
        return(
            <div>
                <div className="linputer">
                    <div className="lbutton" onClick={this.selectCityList}>
                        <span className="city">{selectCityName}</span>
                        <span className="cityicon"></span>
                    </div>
                    <div className="rinput">
                        <input className="inputer" type="text" onBlur={this.handelHisState} placeholder="搜索职位或公司" />
                        <span className="search" onClick={this.handleHistory}>
                            <em className="searchicon"></em>
                        </span>
                    </div>
                </div>
                <ul className="history" style={{display: historyDisplay}}>
                    {hisList}
                </ul>
                <PositionsCon posiList={posiList} pageType={pageType} showhinde={showhinde} emptyDisplay={emptyDisplay} />
                <SearchCity display={cityDisplay} onhandlecity={this.handleCity} />
            </div>
        )
    }
    
    handleHistory(){
        // 添加历史记录
        let { historyList, selectCityName, positionName } = this.state;
        localStorage.setItem("history_list", JSON.stringify(historyList));
        if(positionName==""){
            return
        } else {
            // 搜索
            this.searchPublic(selectCityName, positionName);
        }
        
    }

    handelHisState(e){
        if(!e.target.value){
            return
        }
        var mySet = new Set();
       
        this.state.historyList.forEach(function(curr, index){
            mySet.add(curr)
        })
        mySet.add(e.target.value)
        this.setState({
            historyList: Array.from(mySet),
            positionName: e.target.value
        })
    }

    handelDele(index){
        var newList = JSON.parse(localStorage.getItem("history_list"))
        newList.splice(index, 1);
        localStorage.setItem("history_list", JSON.stringify(newList))
        this.setState({
            historyList: newList
        })
    }

    selectCityList(){
        if(this.state.cityDisplay == "none"){
            this.setState({
                cityDisplay: "block"
            })
        }
    }

    handleCity(cityName){
        if(typeof cityName == "undefined"){
            this.setState({
                cityDisplay: "none"
            })
        }else{
            this.setState({
                selectCityName: cityName,
                cityDisplay: "none"
            })
            this.searchPublic(cityName, this.state.positionName);
        }
    }

    searchPublic(cityName, positionName) {
        let _this = this;
        this.setState({
            showhinde: true
        })
        // 搜索
        axios.get(`/search.json?city=${cityName}&positionName=${positionName}&pageNo=1&pageSize=15`).then(function(response){
            var list = response.data.content.data.page.result
            console.log(response)
            if(list.length==0){
                _this.setState({
                    historyDisplay: "none",
                    emptyDisplay: "block"
                })
            } else {
                _this.setState({
                    posiList: list,
                    historyDisplay: "none"
                })
                // var resuleList = _this.state.posiList.map(function(ele, index){
                //     return <PositionItems item={ele} key={index} />
                // })
            }
        })
    }

    setStateOne(newpageNumCurr){
        this.setState({
            pageNumCurr: newpageNumCurr,
        })
    }
    setStateSec(newposiList){
        var _this = this;
        this.setState({
            posiList: [..._this.state.posiList, ...newposiList],
            loadMoreText: "加载更多"
        })
    }

}


export default Search

