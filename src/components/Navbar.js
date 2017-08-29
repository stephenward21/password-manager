import React, { Component } from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';

				    	// <li><Link to="/">Home</Link></li>
				     //  	<li><Link to="/about">About Us</Link></li>
				     //  	<li><Link to="/accounts">Login</Link></li>
				     //  	<li><Link to="/accounts">Register</Link></li>
				     //  	<li><Link to="/accounts">Accounts</Link></li>
				     // <Link to="/" className="navbar-brand">StoreIt</Link>
				    //  					   <ul className="nav navbar-nav float-left">
					   		
					   // </ul>

class Navbar extends Component {
	render(){
		return(
	    	<div>
				<nav className="navbar navbar-default navbar-fixed-top">
				  <div className="container-fluid navbar-white"	>
				    <ul className="nav navbar-nav">
				    	<li>Home</li>
				    	<li>Register</li>
				    	<li>Login</li>
				    	<li>Accounts</li>
				    	<li>Logout</li>

				    </ul>
				  </div>
				  <div className="container">
				    <div className="navbar-header">
				    	StoreIT
				    	
				    </div>

				  </div>
				</nav>
	        </div>
		)
	}
}


export default Navbar;
