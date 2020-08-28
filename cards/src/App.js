import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import NavBarContainer from './Components/NavBar/NavBarContainer';
import CardListContainer from './Components/CardsList/CardListContainer';
import CardEditContainer from './Components/Card/CardEditContainer';
import LogInContainer from './Components/UserForm/LogInContainer';
import RegistrationContainer from './Components/UserForm/Registration/RegistrationContainer';



function App() {
  return (

    <div className="Wripper">
      <NavBarContainer />
      <div className="h-1000"></div>
      <Container fluid>
        <Row fluid>
          <Col>
            <Route  exact path='/LogIn' component={LogInContainer} />
            <Route path='/Registration' component={RegistrationContainer} />
            <Route path='/list' component={CardListContainer} />
            <Route path='/card' component={CardEditContainer} />
            <Redirect from='/' to='/LogIn' />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;




/*

<div className="Wripper"> 
      <NavBarContainer />
      <div className="h-1000"></div>
      <Container fluid>
        <Row fluid>
          <Col>
          <div>
              <Route exact path='/' component={CardListContainer} />
              <Route path='/card' component={UserFormContainer} />
          </div>
          </Col>

          </Row>
          </Container>
        </div>

*/











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