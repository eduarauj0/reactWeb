import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

function MyForm() {
  const [inputs, setInputs] = useState({});
  const baseURL = 'http://localhost:8081/login';

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  function ajaxLogin(){
	    //alert(JSON.stringify(inputs));
		//axios.post(baseURL,'login=eduardo&senha=123').then((response) => {
		const usersName = JSON.stringify(inputs);
		const customConfig = "{headers: {'Content-Type': 'application/json'}";
		axios.post(baseURL,'login=eduardo&senha=123').then((response) => {
			console.log(response);
			localStorage.setItem("token",response.data.token);
		}).catch(error => {
			console.log(error.response.data.message);
		})
		
		//axios({
		//  method: 'post',
		//  url: baseURL,
		//  headers: {'Content-Type': 'application/json'}, 
		//  data: {
		//	  "login":"eduardo"
		//	  ,"senha":"123"
		//	}
		//});
	}

  const handleSubmit = (event) => {
		ajaxLogin();
		event.preventDefault();
		//alert(JSON.stringify(inputs));
  }
  
  const verificarToken = (event) => { 
    event.preventDefault();
    alert(localStorage.getItem("token"));
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
		
		<Button variant="contained" onClick={verificarToken}> token</Button>
       
    </form>
  )
}

export default MyForm;