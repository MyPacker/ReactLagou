import React, { Component } from "react";
import "./search.css";
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

class SearchCity extends Component{
    constructor(){
        super();
        this.state = {
            cityList: [
                '成都','北京','上海','哈尔滨','西藏','厦门',
				'福建','深圳','杭州','澳门特别行政区','保定','北海',
				'包头','长春','重庆','东营','德阳','德州',
				'佛山','阜阳','福州','桂林','贵阳','广州',
				'成都','北京','上海','哈尔滨','西藏','厦门',
				'福建','深圳','杭州','澳门特别行政区','保定','北海',
				'包头','长春','重庆','东营','德阳','德州',
				'佛山','阜阳','福州','桂林','贵阳','广州',
				'成都','北京','上海','哈尔滨','西藏','厦门',
				'福建','深圳','杭州','澳门特别行政区','保定','北海',
				'包头','长春','重庆','东营','德阳','德州',
				'佛山','阜阳','福州','桂林','贵阳','广州'
            ]
        }
        this.handleCityItem = this.handleCityItem.bind(this)
    }

    render(){
        let { display } = this.props;
        let _this = this;
        var list = this.state.cityList.map(function(ele, index){
            return  <div className="activeable cities-item" key={index} onClick={_this.handleCityItem} data-item={ele}>{ele}</div>
        })
        return(
            <div className="fdialog-content" style={{display: display}}>
                <div className="fdialog-rcon">
                    <div className="cities-header">城市列表</div>
                    <div className="cities-list">
                       {list}
                    </div>
                </div>
                <div className="left" onClick={_this.handleCityItem}  style={{display: display}}>
                    <span className="corner"></span>
                </div>
            </div>
        )
    }

    handleCityItem(e){
       this.props.onhandlecity(e.currentTarget.dataset.item)
    }
}

export default SearchCity