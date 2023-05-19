import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Formulario from './formulario';
import ButtonGrupo from './buttonGrupo';
import {useNavigate} from 'react-router-dom';



function Barra() {
	const navigate = useNavigate();
	
  const chamaComponente = (evento) => {
	  navigate(evento);
  }
	
  return (
		<Box sx={{ flexGrow: 1 }}>
		  <AppBar position="static">
			  <Toolbar>
				  <IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				  >
					<MenuIcon />
				  </IconButton>
				  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					News
				  </Typography>
				  <Button color="inherit" onClick={() => chamaComponente('/grid2')}>grid2</Button>
				  <Button color="inherit" onClick={() => chamaComponente('/gridMiui2')}>gridMiui2</Button>
				  <Button color="inherit" onClick={() => chamaComponente('/multipleSelect')}>multipleSelect</Button>
				  <Button color="inherit" onClick={() => chamaComponente('/data')}>data</Button>
				  <Button color="inherit" onClick={() => chamaComponente('/formBootstrap')}>formBootstrap</Button>
				  <Button color="inherit" onClick={() => chamaComponente('/car')}>car</Button>
				  <ButtonGrupo color="inherit" />
			  </Toolbar>
		  </AppBar>
		</Box>
  );
}

export default Barra;