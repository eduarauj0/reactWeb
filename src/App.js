import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
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


function App() {
  return (
	<Container fluid="md">
      <Row>
        <Col>
			 <div className="App">
      <h1>Hello World!</h1>
	  <div><Car brand="Ford" /></div>
	  <div><Formulario/></div>
	  <div><Ajax/></div>
	  <div><Bootstrap/></div>
	  <div><Popup parametro1="passei 1 parametro"/></div>
	  <div><Grid /></div>
	  <div><Grid2 /></div>
	  <div><GridMiui /></div>
    </div>
		
		</Col>
      </Row>
    </Container>
   
  );
}



export default App;