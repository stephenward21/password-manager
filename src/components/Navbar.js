import React, { Component } from 'react';
import Login from './components/Login';

class Navbar extends Component {
	render(){
		return(
	    	<div>
				<nav className="navbar navbar-default navbar-fixed-top">
				  <div className="container-fluid navbar-white"	>
				    <ul className="nav navbar-nav">
				    	<li><Link to="/">Home</Link></li>
				      	<li><Link to="/about">About Us</Link></li>
				      	<li><Link to="/accounts">Login</Link></li>
				      	<li><Link to="/accounts">Register</Link></li>
				      	<li><Link to="/accounts">Accounts</Link></li>
				    </ul>
				  </div>
				  <div className="container">
				    <div className="navbar-header">
				    	<Link to="/" className="navbar-brand">StoreIt</Link>
				    </div>
					   <ul className="nav navbar-nav float-right">
					   		{rightBar}
					   </ul>
				  </div>
				</nav>
	        </div>
		)
	}
}


export default Navbar;
