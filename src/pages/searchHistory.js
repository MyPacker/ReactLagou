import React, { Component } from "react";
import "./search.css";


class SearchHistory extends Component{
    constructor(){
        super();
        this.delHistory = this.delHistory.bind(this);
        this.HisSearch = this.HisSearch.bind(this);
    }

    render(){
        let { item, city, _id } = this.props;
        return(
            <li className="activeable history-item" data-position={item} data-city={city} onClick={this.HisSearch}>
                <span className="text">{item}</span>
                <div className="delcon" onClick={this.delHistory} data-id={_id}>
                    <span className="delicon"></span>
                </div>
            </li>
        )
    }

    delHistory(e){
        // console.log(e.currentTarget.dataset.id)
        this.props.ondele(e.currentTarget.dataset.id)
    }

    HisSearch(e){
        let { city, position} = e.currentTarget.dataset;
        this.props.onsearhistory(city, position);
    }
}

export default SearchHistory;