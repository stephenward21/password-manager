import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';

class App extends Component {
	render() {
	 return (
	   <div className="App">
	   	<Navbar />
        <h1 className="home-title">Password Manager</h1>

	
	   </div>
	);
	}
}

export default App;
