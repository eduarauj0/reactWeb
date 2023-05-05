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



function App() {
  return (
	<Container fluid="md">
      <Row>
        <Col>
			<BrowserRouter>
				  <div className="App">
					  <div><Car brand="Ford" /></div>
					  			  
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
					  
					  <Routes>
						  <Route path="/" element={<Home />} />
						  <Route path="/formulario" element={<Formulario />} />
						  <Route path="/ajax" element={<Ajax />} />
						  <Route path="/bootstrap" element={<Bootstrap />} />
						  <Route path="/grid" element={<Grid />} />
						  <Route path="/grid2" element={<Grid2 />} />
						  <Route path="/gridMiui" element={<GridMiui />} />
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