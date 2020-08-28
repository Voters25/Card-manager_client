import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import './LogIn.css';

export default class LogIn extends React.Component {
    render() {


        this.emailFormElement = React.createRef();
        this.passwordFormElement = React.createRef();
        

        this.changeEmail = () => {
            let email = this.emailFormElement.current.value;
            this.props.changeEmailValue(email);
        }
        this.changePassword = () => {
            let password = this.passwordFormElement.current.value;
            this.props.changePasswordValue(password);
        }

        this.sendForm = () => {
            let email = this.emailFormElement.current.value;
            let password = this.passwordFormElement.current.value;
            let userForm = {email, password};
            this.props.sendUserForm(userForm);
        }

        this.getRegistrationPage = () => {
            this.props.getRegPage();
        }

        //             border border-warning rounded


        return (

            <Col xs={12} md={10} lg={8} xl={6} className="m-md-auto">
                <Form className="mt-4 bg-white border-form-LogIn">
                    <Form.Group  controlId="formBasicEmail" className="mt-2">
                        <Col xs={12} sm={10} md={9} lg={8} xl={6} className="m-auto mt-5">
                            <Form.Label className="ml-2">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.changeEmail} ref={this.emailFormElement} value={this.props.email} />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Col xs={12} sm={10} md={9} lg={8} xl={6} className="m-auto">
                            <Form.Label className="ml-2">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.changePassword} ref={this.passwordFormElement} value={this.props.password} />
                        </Col>
                    </Form.Group>
                    <Col /* xs={6} */ xs={12} sm={10} md={9} lg={8} xl={6} className="m-auto">
                    <Button onClick={this.sendForm} variant="primary" className="mb-2 mt-1">
                        Log in
                    </Button>
                    <Button onClick={this.getRegistrationPage} variant="warning" className="ml-sm-2 mb-2 mt-1">
                        Registration
                    </Button>
                    </Col>
                </Form>
            </Col>

        )
    }
}