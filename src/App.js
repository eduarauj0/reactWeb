import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Car from './teste';
import Login from './login';
import Formulario from './formulario';
import Ajax from './ajax';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
	  <div><Car brand="Ford" /></div>
	  <div><Formulario/></div>
	  <div><Ajax/></div>
    </div>
  );
}



export default App;