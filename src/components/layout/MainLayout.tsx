import { Box, Container } from '@mui/material';
import { Header} from './Header';
import { Outlet } from 'react-router-dom';


export const MainLayout = () => {
   return (
      <Box sx={ {display: 'flex', flexDirection: 'column', minHeight: '100vh'} }>
         <Header/>
         <Container component="main" sx={ {mt: 8, flexGrow: 1} }>
            <Outlet/>
         </Container>
      </Box>
   );
};
