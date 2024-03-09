import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary shadow py-4">
            <Container>
                <Navbar.Brand href="#">Lezy components</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="m-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to="/"><Nav href="#action1">HOME</Nav></Link>
                    <Link to="/about"><Nav className='ms-4' href="#action1">ABOUT</Nav></Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}
export default RootLayout