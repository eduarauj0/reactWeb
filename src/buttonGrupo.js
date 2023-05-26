import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from 'react-router-dom';
import React,{ useState,useEffect,useContext,createContext  } from 'react';
import { paramFinal,App,Context } from './App';

function ButtonGrupo() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { contexto, setContexto } = useContext(Context);
  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
	setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function changeBackground(e) {
    setAnchorEl(e.currentTarget);
  }
  
  const navigate = useNavigate();
	
  const chamaComponente = (evento) => {
	  navigate(evento);
	  handleClose();
  }
  
  const logout = (evento) => {
	 localStorage.setItem("token","");
	 setContexto({nome:'teste',cpf:'11111111111',openPop:true,msgPop:'Deslogado'});
  }

  return (
    <div>
      <Button
        id="basic-button"
		color="inherit"
        onClick={handleClick}
		onMouseEnter={changeBackground}
      >
        Componentes
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => chamaComponente('/formulario')} >Login</MenuItem>
        <MenuItem onClick={() => chamaComponente('/gridMiui')}>GridMiui</MenuItem>
        <MenuItem onClick={() => chamaComponente('/ajax')}>Ajax</MenuItem>
		<MenuItem onClick={() => chamaComponente('/bootstrap')}>Bootstrap</MenuItem>
		<MenuItem onClick={() => logout()}>Logout</MenuItem>
		
		
      </Menu>
	</div>
  );
}

export default ButtonGrupo;