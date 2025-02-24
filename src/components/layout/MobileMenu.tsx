import {
   Box,
   Drawer,
   List,
   ListItem,
   ListItemButton,
   ListItemText,
} from '@mui/material';

// import { useState } from 'react';
import { Link } from 'react-router-dom';


interface MobileMenuProps {
   isOpen: boolean;
   onClose: () => void;
}


export const MobileMenu = ({isOpen, onClose}: MobileMenuProps) => {

   const menuItems = [
      {text: 'Pedir Taxi', path: '/map'},
      {text: 'Perfil', path: '/profile'}
   ];

   return (
      <Drawer anchor="left" open={isOpen} onClose={onClose}>
         <Box sx={{width: 250}}>
            <List>
            {
               menuItems.map(
                  item => (
                     <ListItem key={item.text} disablePadding>
                        <ListItemButton component={Link} to={item.path} onClick={onClose}>
                           <ListItemText primary={item.text}/>
                        </ListItemButton>
                     </ListItem>
                  )
               )
            }
            </List>
         </Box>
      </Drawer>
   );
};
