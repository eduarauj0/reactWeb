import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from 'react-router-dom';

function ButtonGrupo() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
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
		
		
      </Menu>
	</div>
  );
}

export default ButtonGrupo;