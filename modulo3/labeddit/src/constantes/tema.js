import { createTheme } from '@mui/material/styles';
import { corNeutra, corPrimaria } from './cores';

const tema = createTheme({
  palette: {
    primary: {
      main: corPrimaria,
      contrastText: "white"
    },
    text: {
        primary: corNeutra
    }
  },
});


export default tema