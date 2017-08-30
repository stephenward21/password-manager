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
				  	<div className="container">
				    <div className="navbar-header">
				    	<ul className="nav navbar-nav">
				    		<li><Link to = '/home'>StoreIT</Link></li>
				    	</ul>
				    	
				    </div>
				    <ul className="nav navbar-nav">
				    	<li><Link to ='/home'>Home</Link></li>
				    	<li><Link to ='/register'>Register</Link></li>
				    	<li><Link to ='/login'>Login</Link></li>
				    	<li><Link to ='/accounts'>Accounts</Link></li>
				    </ul>
				  </div>
	

				  </div>
				</nav>
	        </div>
		)
	}
}


export default Navbar;
