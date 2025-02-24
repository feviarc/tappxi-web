import {
   AppBar,
   Button,
   IconButton,
   Toolbar,
   Typography,
   useMediaQuery
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';


export const Header = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const isMobile = useMediaQuery('(max-width: 600px)');

   return (
      <>
         <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>

               { isMobile && (
                  <IconButton
                   edge="start"
                   color="inherit"
                   onClick = {() => setIsMenuOpen(true)}
                  >
                     <MenuIcon/>
                  </IconButton>
               )}

               <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit'}}
               >
                  TappXI
               </Typography>

               {!isMobile && (
                  <>
                     <Button color="inherit" component={Link} to="/map">Pedir Taxi</Button>
                     <Button color="inherit" component={Link} to="/profile">Perfil</Button>
                  </>
               )}

               { isMobile && (
                  <IconButton edge="end" color="inherit">
                     <AccountCircle/>
                  </IconButton>
               )}

            </Toolbar>
         </AppBar>
         <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
         />
      </>
   );
};
