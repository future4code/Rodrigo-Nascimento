import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { EstiloToolbar } from '../../paginas/PaginaCadastro/styled';


const Header = () => {
  return (

    <AppBar position="static">
      <EstiloToolbar>
        <Button color="inherit">LabReddit </Button>
        <Button color="inherit">Login</Button>
      </EstiloToolbar>
    </AppBar>

  );
}

export default Header