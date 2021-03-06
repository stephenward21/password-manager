import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import $ from 'jquery';


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blah: 'blah'
		}
		
	}

	componentDidMount() {
		window.addEventListener('load', this.wrapperLoad);
		
	}

	wrapperLoad = () => {
		setTimeout(function(){
			$('.home-wrapper').fadeIn();
		}, 2500);
	}

	handleClick = () => {
		$('.homer').css({
    		'transform': 'translateX(100vw)',
    		'transition': '4s',
		})
		setInterval(function(){
			$('.homer').css('display', 'none')
		}, 3500)
		
	}

	
	render(){

		return(
			<div className="home-wrapper" >
				<div className="homer">
					<h1 className="store"> StoreIT<br></br><p className="under-title">The ultimate password storage application</p> </h1>
					<p> Do you ever have problems remembering your passwords?? I know I do!<br></br>
						Instead of having to go through the "retrieve password" process, come straight to StoreIT and retrieve your password in seconds! </p>
					<ButtonToolbar className="buttons">
				      <Button bsStyle="primary" className="get-started" onClick={this.handleClick}>Get Started!</Button>
				    </ButtonToolbar>
				</div>
			</div>

		)
	}
}

export default Home;