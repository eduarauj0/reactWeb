import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  }

  return (
    <form onSubmit={handleSubmit}>
      
	  <TextField size="small"
 id="outlined-basic" label="Nome" variant="outlined" value={inputs.username || ""} name="username"
        onChange={handleChange}/>
      <TextField size="small"
 id="outlined-basic" label="Idade" variant="outlined" value={inputs.age || ""} name="age"
        onChange={handleChange}/>
        
		<Button variant="contained" type="submit">Enviar</Button>
       
    </form>
  )
}

export default MyForm;