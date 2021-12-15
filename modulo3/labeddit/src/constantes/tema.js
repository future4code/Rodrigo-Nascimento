import { createTheme } from '@mui/material/styles';
import { corNeutra, corPrimaria, corSecundaria } from './cores';

const tema = createTheme({
  palette: {
    primary: {
      main: corPrimaria,
      contrastText: "white"
    },
    secundary: {
      main: corSecundaria,
      contrastText: "white"
    },
    text: {
        primary: corNeutra
    }
  },
});


export default tema