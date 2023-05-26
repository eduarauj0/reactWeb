import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React,{ useState,useEffect,useContext,createContext  } from 'react';
import { paramFinal,App,Context } from './App';


function MensagemPop() {
	
	const { contexto, setContexto } = useContext(Context);
	const changeHandler = event => {
		setContexto({nome:event.target.value,cpf:'11111111111',openPop:true,msgPop:event.target.value});
		
	}
  //const [corpoSnack, setCorpoSnack] = useState({param});
  
  //React.useEffect(() => {
	  //setCorpoSnack(corpoSnack);
	//console.log('passei')
	//}, [corpoSnack]);

  const handleClose = () => {
	setContexto({nome:'teste',cpf:'11111111111',openPop:false,msgPop:'test'});
  };

  return (
    <div>
      <Snackbar open={contexto.openPop} autoHideDuration={5000} onClose={handleClose}  message={contexto.msgPop} anchorOrigin={{'vertical': 'bottom', 'horizontal': 'right'}}>
		</Snackbar>
    </div>
  );
}

export default MensagemPop;