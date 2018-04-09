import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './login';
import registerServiceWorker from './registerServiceWorker';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';

class Wrap extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/common" component={App}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Redirect path="/" to="/common/positions" exact></Redirect>
                    <Route render={()=>{return <div>  404 ！</div>}} />
                </Switch>
            </Router>


        )
    }
}


ReactDOM.render(<Wrap />, document.getElementById('root'));
registerServiceWorker();
