import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Car from './teste';
import Login from './login';
import Formulario from './formulario';
import Ajax from './ajax';
import Bootstrap from './bootstrap';
import Popup from './popup';
import Grid from './grid';
import Grid2 from './grid2';
import GridMiui from './gridMiui';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MultipleSelect from './select';
import GridMiui2 from './gridMiui2';
import Data from './data';
import FormBootstrap from './formBootstrap';
import Home from './home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function App() {
  return (
	<Container fluid="md">
      <Row>
        <Col>
			<BrowserRouter>
				  <div className="App">	  
					  <nav>
						  <ul>
							<li>
							  <Link to="/formulario">Formulario</Link>
							</li>
							<li>
							  <Link to="/ajax">Ajax</Link>
							</li>
							<li>
							  <Link to="/bootstrap">Bootstrap</Link>
							</li>
							<li>
							  <Link to="/grid">Grid</Link>
							</li>
							<li>
							  <Link to="/grid2">Grid2</Link>
							</li>
							<li>
							  <Link to="/gridMiui">GridMiui</Link>
							</li>
							<li>
							  <Link to="/gridMiui2">GridMiui2</Link>
							</li>
							<li>
							  <Link to="/multipleSelect">MultipleSelect</Link>
							</li>
							<li>
							  <Link to="/data">Data</Link>
							</li>
							<li>
							  <Link to="/formBootstrap">FormBootstrap</Link>
							</li>
							<li>
							  <Link to="/car">Car</Link>
							</li>
						  </ul>
						</nav>
						
						
						{/* aqui está dando submit <Navbar bg="light" expand="lg">
						  
							<Navbar.Brand href="home">Home</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
							  <Nav className="me-auto">
								<Nav.Link href="gridMiui">GridMiui</Nav.Link>
								<Nav.Link href="#link">Link</Nav.Link>
							  </Nav>
							</Navbar.Collapse>
						
						</Navbar>*/}
					  
					  <Routes>
						  <Route path="/" element={<Home />} />
						  <Route path="/formulario" element={<Formulario />} />
						  <Route path="/ajax" element={<Ajax />} />
						  <Route path="/bootstrap" element={<Bootstrap />} />
						  <Route path="/grid" element={<Grid />} />
						  <Route path="/grid2" element={<Grid2 />} />
						  <Route path="/gridMiui" element={<GridMiui />} />
						  <Route path="/gridMiui2" element={<GridMiui2 />} />
						  <Route path="/multipleSelect" element={<MultipleSelect />} />
						  <Route path="/data" element={<Data />} />
						  <Route path="/formBootstrap" element={<FormBootstrap />} />
						  <Route path="/car" element={<Car brand="Ford" />} />
					  </Routes>
				  </div>
			</BrowserRouter>
		</Col>
      </Row>
    </Container>
   
  );
}



export default App;