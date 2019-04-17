import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'

// typescript test
var message:string;

function render(){
	message = "hi";
	return (<div>{message}</div>);

}

ReactDOM.render(
    render(),
    document.getElementById('app')
);

module.hot.accept();
