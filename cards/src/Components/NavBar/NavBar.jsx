import React from 'react'
import { Button, Navbar, Container } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';



export default class NavBar extends React.Component {

    render() {

        let userName = this.props.userName;
        

        this.getAllCards = () => {
            this.props.getAllCard();
        }
        this.getLogInPage = () => {
            this.props.getLogPage();
        }
        this.logOut = () => {
            this.props.onLogOut();
        }


            //  ЕСЛИ ЗАЛОГИНЕН => ЕСТЬ КНОПКА ПОЛУЧИТЬ ЛИСТ
            //  ТА ЖЕ ТЕМА С LOG OUT

        return (

            <Navbar collapseOnSelect /* expand="md" - бургер-меню */ style={{ background: '#ff9800' }} >
                <Container className="flex-nowrap" >
                    {/* <NavbarToggle className="mr-md-3 " aria-controls="responsive-navbar-nav" /> */}
                    <NavbarCollapse id="responsive-navbar-nav" >
                        {userName ?
                        <React.Fragment>
                            <Button onClick={this.logOut} variant="outline-dark" className="mr-md-3 mr-sm-2 mr-2">Log Out</Button>
                            <Button onClick={this.getAllCards} variant="outline-dark" className="mr-md-3 mr-sm-2 mr-2">All cards</Button>
                            <h5 className="ml-auto d-none d-sm-inline" style={{ display: 'inline-block' }}>{userName}</h5>
                        </React.Fragment>
                        :
                            <Button onClick={this.getLogInPage} variant="outline-dark" className="mr-3">Log In</Button>
                        }
                        {/*<Button variant="outline-info">Refresh</Button>*/}
                    </NavbarCollapse>
                </Container>
            </Navbar>
        )
    }
}




/*

<Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Container>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </NavbarCollapse>
                </Container>
            </Navbar>

*/