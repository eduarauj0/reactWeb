import React,{ useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

function Ajax() {
  const baseURL = 'http://localhost:8081/api/aluno';
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    ajaxGet(baseURL);
  }, []);
  
  
  
  const shoot = (e) => {
	   e.preventDefault();
	ajaxGet(baseURL);
  }
  
  function ajaxGet(url){
	axios.get(url).then((response) => {
		console.log(response.data[0]);
		setPost(response.data[0]);
	}).catch(error => {
		console.log(error)
	})
  }
  
  const blurHandler = (event) => {
      ajaxGet(baseURL+'/'+post.cpf);
	  handleChange(event);
  }
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPost(values => ({...values, [name]: value}))
  }

  if (!post) 
	  return (
    <div>
	  <h1>não trouxe nada</h1>
    </div>
  );

  return (
    <div>
	 <h1>teste</h1>
      <h1>{post.cod}</h1>
      <p>{post.cpf}</p>
	  <p>{post.nome}</p>
	  <button onClick={shoot}>Take the shot!</button>
	  <input
            type="input"
            name="cpf"
            value={post.cpf}
            onBlur={blurHandler}
			onChange={handleChange}
          />
    </div>
  );
  
}

export default Ajax;