import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Link,NavLink } from "react-router-dom";
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
import Barra from './barra';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonGrupo from './buttonGrupo';
import React,{ useState,useEffect,useContext,createContext,useMemo  } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import MensagemPop from './mensagemPop';



export let paramFinal = {
							open: false,
							vertical: 'top',
							horizontal: 'center',
							mensagem: 'Eu sou a mensagem json'
						  };
						  
						  
export function parametroPop(param){
	   paramFinal = param;
	   alert(JSON.stringify(paramFinal));
}

export function deslogarSistema(){
	   
}

export const Context = createContext({
   contexto: {nome:'eduardo',cpf:'00960750150',openPop:true,msgPop:'Mensagem padrão'},
   setContexto: () => {}
});

function App() {
	
	const [contexto, setContexto] = useState({nome:'eduardo',cpf:'00960750150',openPop:true,msgPop:'Mensagem padrão'});
	
	const value = useMemo(
    () => ({ contexto, setContexto }), 
    [contexto]
  );

  return (
	<Container fluid="md" >
      <Row>
        <Col>
			<BrowserRouter>
			<Context.Provider value={value}>
				  <div className="App">	 
					  <Barra />
					  <br /><br />
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
						  <Route path="/car" element={<Car brand="Ford" color="azul"/>} />
						  <Route path="/buttonGrupo" element={<ButtonGrupo />} />
						  <Route path="/mensagemPop" element={<MensagemPop />} />
					  </Routes>
					 
					 
					  <MensagemPop />
					  
					  
					  
					  <img src={'data:image/png;base64,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'} />
					 
				  </div>
				  </Context.Provider>
			</BrowserRouter>
		</Col>
      </Row>
    </Container>
   
  );
}



export default App;