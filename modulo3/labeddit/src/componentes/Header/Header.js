import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { EstiloToolbar } from './styled';
import { useNavigate } from 'react-router-dom';
import { irParaLogin, irParaFeed} from '../../rotas/coordenadas';




const Header = () => {

  const navigate = useNavigate()

  return (

    <AppBar position="static">
      <EstiloToolbar>
        <Button color="inherit" onClick={() => irParaFeed(navigate)}>LabReddit </Button>
        <Button color="inherit" onClick={() => irParaLogin(navigate)}>Login</Button>
      </EstiloToolbar>
    </AppBar>

  );
}

export default Header