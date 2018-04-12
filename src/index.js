import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './login';
import Register from "./register";
import registerServiceWorker from './registerServiceWorker';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect
} from 'react-router-dom';

class Wrap extends Component{
    
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/common" component={App}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Redirect path="/" to="/common/positions" exact></Redirect>
                    <Route render={()=>{return <div>  404 ！</div>}} />
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(<Wrap />, document.getElementById('root'));
registerServiceWorker();
