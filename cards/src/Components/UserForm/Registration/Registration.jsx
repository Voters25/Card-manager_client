import React from 'react'
import { Form, Col, Button } from 'react-bootstrap';

export default class Registration extends React.Component {
    render() {

        this.emailFormElement = React.createRef();
        this.passwordFormElement = React.createRef();
        this.passwordTwoFormElement = React.createRef();


        this.changeEmail = () => {
            let email = this.emailFormElement.current.value;
            this.props.changeEmailValue(email);
        }
        this.changePassword = () => {
            let password = this.passwordFormElement.current.value;
            this.props.changePasswordValue(password);
        }
        this.changePasswordTwo = () => {
            let passwordTwo = this.passwordTwoFormElement.current.value;
            this.props.changePasswordTwolValue(passwordTwo);
        }



        this.sendForm = () => {
            let email = this.emailFormElement.current.value;
            let password = this.passwordFormElement.current.value;
            let passwordTwo = this.passwordTwoFormElement.current.value;
            let userForm = {email, password, passwordTwo};
            this.props.sendUserForm(userForm);
        }

        return (

            <Col xs={12} md={10} lg={8} xl={6} className="m-md-auto">
                <Form className="mt-4 bg-white border-form-LogIn">
                    <Form.Group sm={2} controlId="formBasicEmail" className="mt-2">
                        <Col xs={12} sm={10} md={9} lg={8} xl={6}  className="m-auto mt-5">
                            <Form.Label className="ml-2">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.changeEmail} value={this.props.email} ref={this.emailFormElement} />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Col xs={12} sm={10} md={9} lg={8} xl={6} className="m-auto">
                            <Form.Label className="ml-2">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.changePassword} value={this.props.password} ref={this.passwordFormElement} />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Col xs={12} sm={10} md={9} lg={8} xl={6} className="m-auto">
                            <Form.Label className="ml-2"> Repeat password</Form.Label>
                            <Form.Control type="password" placeholder="Repeat password" onChange={this.changePasswordTwo} value={this.props.passwordTwo} ref={this.passwordTwoFormElement} />
                            <Form.Text className="text-muted">
                                Very secret
                            </Form.Text>
                        </Col>
                    </Form.Group>
                    <Col xs={12} sm={10} md={9} lg={8} xl={6} className="m-auto">
                    <Button onClick={this.sendForm} variant="primary" className="mb-2 mt-1">
                        Registration
                    </Button>
                    </Col>
                </Form>
            </Col>

        )
    }
}