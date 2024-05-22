import React,{ useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

function GridMiui2() {
	
	const [rows, setRows] = React.useState(null);
	const baseURL = 'http://localhost:8081/api/aluno';
	
	//React.useEffect(() => {
	//	ajaxGet(baseURL);
	//}, []);
	
	useEffect(()=>{
      /*
      Query logic
      */
      ajaxGet(baseURL);
	},[]);

	const columns: GridColDef[] = [
	  { field: 'cod', headerName: 'Código', width: 90 },
	  {
		field: 'cpf',
		headerName: 'CPF',
		width: 150,
		editable: true,
	  },
	  {
		field: 'nome',
		headerName: 'Nome',
		width: 450,
		editable: true,
	  },
	  {
		field: 'matricula',
		headerName: 'Matrícula',
		type: 'number',
		width: 110,
		editable: true,
	  }
	];
	
	function ajaxGet(url){
		fetch(baseURL, { 
		   method: 'get', 
		   headers: new Headers({
			 'Authorization':localStorage.getItem("token")
		   })
		 }).then(response => 
			response.json().then(data => ({
				data: data,
				status: response.status
			})
			).then(res => {
				//console.log(res.status, res.data)
				if(res.status === 401){
					console.log("Autorização negada")
				}else if(res.status === 200){
					setRows(res.data);
				}
				
		}))
		 .catch(error => {
			// if(error.message){
				//console.log("teste agora");
				//setContexto({nome:'logado',cpf:'11111111111',openPop:true,msgPop:data.message});
			//}
                //console.error('There was an error!', error);
				console.log("Caiu no catch");
				setRows('Caiu no catch');
        });
	}
	
	const style = {
      overflowY: 'scroll',
      height:'500px'
    };
	//console.log(rows);
	if (!rows) {
		  return (
		<div>
		  <h1>não trouxe nada</h1>
		</div>
	)}else{
		return (
		<div>
			<Button variant="outlined" startIcon={<DeleteIcon />}>
				Delete
			</Button>
			<DataGrid
			rows={rows}
			getRowId={(rows) => rows.cod}
			columns={columns}
			initialState={{
			  pagination: {
				paginationModel: {
				  pageSize: 10,
				},
			  },
			}}
			pageSizeOptions={[5,10,25]}
			checkboxSelection
			disableRowSelectionOnClick
		  />
		</div>
		);
	}
  
	
	
  
	
  
}

export default GridMiui2;