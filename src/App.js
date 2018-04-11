import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';
import Loadable from "react-loadable";
// import Positions from "./pages/positions";
import Search from "./pages/search";
import My from "./pages/my";

const Positions = Loadable({
  loader: () => import('./pages/positions'), //变成了异步的组件
  loading: MyLoadingComponent,
  delay: 300
});
// loading
function MyLoadingComponent(){
  return <div className="load-cover">   </div>
}


class App extends Component {
  render() {
    return (
        <div>
          
          <header id="header">拉勾网</header>
      
          <div id="content">

            <Switch>
              <Route path="/common/positions" component={Positions}></Route>
              <Route path="/common/search" component={Search}></Route>
              <Route path="/common/my" component={My}></Route>
              <Redirect path="/common" to="/common/positions" exact></Redirect>
            </Switch>

            
          </div>
      
          <footer id="footer">
            <NavLink to="/common/positions" activeClassName="selected" className="footer-tab-custom">
              <span className="icon"></span>
              <span className="text">职位</span>
            </NavLink>
            <NavLink to="/common/search" activeClassName="selected" className="footer-tab-search">
              <span className="icon"></span>
              <span className="text">搜索</span>
            </NavLink>
            <NavLink to="/common/my" activeClassName="selected" className="footer-tab-mine">
              <span className="icon"></span>
              <span className="text">我的</span>
            </NavLink>
          </footer>

        </div>  
    );
  }
}

export default App;
