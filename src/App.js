import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Accounts from './components/Accounts'



class App extends Component {
	render() {
	 return (
	 	<Router>
		   <div className="App">
		   	<Navbar />
		   	<Route exact path="/register" component={Register} />
		   	<Route exact path="/login" component={Login} />
		   	<Route exact path="/" component={Home} />
		   	<Route exact path="/accounts" component={Accounts} />
		
		   </div>
		</Router>
	);
	}
}

export default App;
