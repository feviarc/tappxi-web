import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
   palette: {
      primary: {main: '#1976d2'},
      secondary: {main: '#4caf50'},
      error: {main: '#d32f2f'}
   },
   typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h1: {
         fontSize: '2.5rem',
         fontWeight: 500
      }
   }
});

