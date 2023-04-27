import Table from 'react-bootstrap/Table';
import Colunas from './colunas';
import HeadGrid from './headGrid';
import Pagination from 'react-bootstrap/Pagination';
import React,{ useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

function Grid2() {
	const colunas = [{nome:'cod'},{nome:'cpf'},{nome:'nome'},{nome:'matricula'},{nome:'#',botao:'true'}];
	const [post, setPost] = React.useState(null);
	const baseURL = 'http://localhost:8081/api/aluno';

  React.useEffect(() => {
    ajaxGet(baseURL);
  }, []);
  
  function ajaxGet(url){
	axios.get(url).then((response) => {
		setPost(response.data);
	}).catch(error => {
		console.log(error)
	})
  }

  if (!post) 
	  return (
    <div>
	  <h1>não trouxe nada</h1>
    </div>
  );
  
  const style = {
      overflowY: 'scroll',
      height:'500px'
    };
  
  return (
  <div style={style}>
		<Table responsive striped bordered hover>
		  <thead>
			<HeadGrid colunas={colunas} />
		  </thead>
		  <tbody>
				{post.map((item,indexKey) => 
					<Colunas data={item} colunas={colunas} indexKey={indexKey} key={indexKey}/>
				)}
		 </tbody> 
		</Table>
  </div>
		
  );
}

export default Grid2;