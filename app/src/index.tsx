import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'

import { Books } from './components/Books';
import { Home } from './components/Home';

// typescript test
var message:string;

/*function render(){
	message = "hi";
	return (<div>{message}</div>);

}
ReactDOM.render(
    render(),
    document.getElementById('app')
);*/


ReactDOM.render(<Router>
			 <Route exact path="/" component={Home}/>
                	<Route exact path="/create" component={Books}/>
		</Router>, document.getElementById('app'));

module.hot.accept();
