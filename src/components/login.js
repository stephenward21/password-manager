import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col ,MenuItem} from 'react-bootstrap';

class Login extends Component {
	render(){
		return(
			<div className="login-wrapper">
				<h1 className="login-registerMessage"></h1>
				<Form horizontal className="login-form-whole">
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
							Password
						</Col>
						<Col sm={10}>
							<FormControl className="empty-form" type="password" name="password" placeholder="Password" />
						</Col>
					</FormGroup>
					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button className="register-form-button" bsStyle="default" bsSize="small" type="submit">
								LOGIN
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		)
	}

}


export default Login;