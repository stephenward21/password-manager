import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col ,MenuItem} from 'react-bootstrap';
// import {bindActionCreators} from 'redux';
// import RegisterAction from '../actions/RegisterAction';
// import {connect} from 'react-redux';

class Register extends Component{
	render(){
		return(
			<div className="register-wrapper">
				<h1 className="register-registerMessage"></h1>
				<Form horizontal className="register-form-whole">
					<FormGroup className="register-form-name"controlId="formHorizontalName" >
						<Col  componentClass={ControlLabel} sm={2}>
							Name
						</Col>
						<Col sm={10}>
							<FormControl className="empty-form" type="text" name="fullName" placeholder="Full Name" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							Email
						</Col>
						<Col sm={10}>
							<FormControl className="empty-form" type="email" name="email" placeholder="Email" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							Address
						</Col>
						<Col sm={10}>
							<FormControl className="empty-form" type="text" name="type" placeholder="Address" />
						</Col>
					</FormGroup>
					
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							City
						</Col>
						<Col sm={10}>
							<FormControl className="empty-form" type="text" name="city" placeholder="City" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							State
						</Col>
						<Col sm={10}>
							<FormControl className="empty-form" type="text" name="state" placeholder="State" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							Password
						</Col>
						<Col sm={10}>
							<FormControl className="empty-form" type="password" name="password" placeholder="Password" />
						</Col>
					</FormGroup>
					
					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button className="register-form-button" bsStyle="default" bsSize="small" type="submit">
								SIGN UP!
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		)
	
	}
}

export default Register;