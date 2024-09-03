import { Navbar, Nav } from "react-bootstrap";
import NavLink from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar bg="primary" expand="md">
            <Navbar.Brand>Your Workout Plan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link as={NavLink} to="/exercises" activeclassname="active">Available Exercises</Nav.Link>

                    <Nav.Link as={NavLink} to="/exerciseselect" activeclassname="active">View Your Exercises</Nav.Link>

                    <Nav.Link as={NavLink} to="/" activeclassname="active">Home</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;