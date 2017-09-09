import React, { Component } from 'react';
// import { DropdownInput } from 'react-dropdown-input';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col ,MenuItem} from 'react-bootstrap';

var options = [
  { value: 'banking', label: 'Banking' },
  { value: 'utilities', label: 'Utilities' },
  { value: 'work' , label: 'Work'},
  { value: 'other' , label: 'Other'}
];


class Accounts extends Component {
	constructor(props) {
		super(props);
		this.state ={
			options: []
		}
		this.logChange = this.logChange.bind(this)
	}

	logChange(val) {
	  console.log("Selected: " + JSON.stringify(val));
	  this.setState({
	  	options: val.value
	  })
	}
	

	render(){
		//if user has logged in and everything has been confirmed
		// if / else statements using props



		return (
			<div className="accounts-wrapper">
				<h2> Select Account Type </h2>
				<Select name="form-field-name" value={this.state.options} options={options} onChange={this.logChange} />
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
							<FormControl className="empty-form" type="password" name="password" placeholder="Password" />
						</Col>
					</FormGroup>
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