import React,{ useState,useEffect,useContext,createContext  } from 'react';
import ReactDOM from 'react-dom/client';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { paramFinal,App,Context } from './App';

function MyForm() {
  const [inputs, setInputs] = useState({});
  const { contexto, setContexto } = useContext(Context);
  const baseURL = 'http://localhost:8081/login';

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  function ajaxLogin(){
	    	
		// body: JSON.stringify({ 'login': 'eduardo','senha':'123' })
		fetch(baseURL, { 
		   method: 'POST',
		   headers: { 'Content-Type': 'application/json' },
		   body: JSON.stringify(inputs)
		 }).then(response => response.json()).then(data => localStorage.setItem("token",data.token));
		
	}
	
  const handleSubmit = (event) => {
	    event.preventDefault();
		ajaxLogin();
		setContexto({nome:'logado',cpf:'11111111111',openPop:true,msgPop:localStorage.getItem("token")});
  }
  
  const verificarToken = (event) => { 
    event.preventDefault();
    alert(localStorage.getItem("token"));
	//App.handleClick({
    //      vertical: 'top',
    //      horizontal: 'center',
    //    });
  }

  return (
    <form onSubmit={handleSubmit}>
      
	  <TextField size="small"
 id="outlined-basic" label="Login" variant="outlined" value={inputs.login || ""} name="login"
        onChange={handleChange}/>
      <TextField size="small"
 id="outlined-basic" label="Senha" variant="outlined" value={inputs.senha || ""} name="senha"
        onChange={handleChange}/>
        
		<Button variant="contained" type="submit">Enviar</Button>
		
		
       
    </form>
  )
}

export default MyForm;