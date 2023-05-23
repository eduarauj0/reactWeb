import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React,{ useState,useEffect,useContext,createContext  } from 'react';
import { paramFinal,App,Context } from './App';


function MensagemPop({corpoSnack,setCorpoSnack}) {
	
	const value = useContext(Context);
	
  //const [corpoSnack, setCorpoSnack] = useState({param});
  
  //React.useEffect(() => {
	  //setCorpoSnack(corpoSnack);
	//console.log('passei')
	//}, [corpoSnack]);

  const handleClose = () => {
	  setCorpoSnack({open: true, mensagem: 'xxxx'});
	  
  };

  return (
    <div>
      <Snackbar open={corpoSnack.open} autoHideDuration={5000} onClose={handleClose}  message={corpoSnack.mensagem}>
		</Snackbar>
		<div>{value}</div>
    </div>
  );
}

export default MensagemPop;