import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React,{ useState,useEffect } from 'react';
import { paramOpen, paramClose, paramFinal,App } from './App';


function MensagemPop({param}) {
	
  const [corpoSnack, setCorpoSnack] = useState({param});
  
  React.useEffect(() => {
		setCorpoSnack(param);
	}, []);
    
    const paramOpen = {
							open: true,
							vertical: 'top',
							horizontal: 'center',
						  };
	const paramClose = {
							open: false,
							vertical: 'top',
							horizontal: 'center',
						  };

  const handleClose = () => {
    setCorpoSnack(paramClose);
  };

  return (
    <div>
      <Snackbar open={corpoSnack.open} autoHideDuration={5000} onClose={handleClose}  message={corpoSnack.mensagem}>
		</Snackbar>
		<div>{corpoSnack.vertical}x</div>
		<div>{param.vertical}y</div>
    </div>
  );
}

export default MensagemPop;