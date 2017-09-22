import React, { Component } from 'react';
// import { DropdownInput } from 'react-dropdown-input';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col ,MenuItem} from 'react-bootstrap';
import $ from 'jquery';

var options = [
  { value: 'banking', label: 'Banking' },
  { value: 'utilities', label: 'Utilities' },
  { value: 'work' , label: 'Work'},
  { value: 'other' , label: 'Other'}
];




class Accounts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: []
		}

	}

	logChange = (val) => {	
	  console.log("Selected: " + val.value)
	  this.setState({
	  	options: val.value
	  })
	}

	showPassword = () => {
		$("#showHide").click(function() {
		    if ($(".password").attr("type") == "password") {
		      $(".password").attr("type", "text");

		    } else {
		      $(".password").attr("type", "password");
		    }
		});

	}


	

	render(){
		console.log(window)

		//if user has logged in and everything has been confirmed
		// if / else statements using props



		return (
			<div className="accounts-wrapper">
				<h2> Select Account Type </h2>
				<Select className="selector" name="form-field-name" value={this.state.options} options={options} onChange={this.logChange} />
				<Form horizontal className="login-form-whole">
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2} className="account">
							Account 
						</Col>
					</FormGroup>
					<FormGroup>
						<Col sm={10}>
							<FormControl className="empty-form" type="email" name="email" placeholder="Account Name" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							Username
						</Col>
					</FormGroup>
					<FormGroup>
						<Col sm={10}>
							<FormControl className="empty-form" type="email" name="email" placeholder="Username" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							Password
						</Col>
					</FormGroup>
					<FormGroup>
						<Col sm={10}>
							<FormControl className="password empty-form" type="password" name="password" placeholder="Password" onChange={this.showPassword} />
						</Col>
					</FormGroup>
						<input type="checkbox" id="showHide" />
      					<label id="showHideLabel">Show Password</label>
					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button className="register-form-button" bsStyle="default" bsSize="small" type="submit">
								Submit
							</Button>
						</Col>
					</FormGroup>

				</Form>

			</div>

		)
	}
}

export default Accounts;