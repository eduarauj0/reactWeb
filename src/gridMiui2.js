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
	
	React.useEffect(() => {
		ajaxGet(baseURL);
	}, []);

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
		axios.get(url).then((response) => {
			setRows(response.data);
		}).catch(error => {
			console.log(error)
		})
	}

	if (!rows) 
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
				  pageSize: 5,
				},
			  },
			}}
			pageSizeOptions={[5]}
			checkboxSelection
			disableRowSelectionOnClick
		  />
		</div>
	);
  
}

export default GridMiui2;