import React from 'react';
import { Box, List, ListItem } from '@chakra-ui/react';

import SideMenuHeaderImage from '../components/sideMenu/headerImage';
import SideMenuHeaderText from '../components/sideMenu/headerText';


const menuHeaderTop = {
    textAlign: 'center',
    position: 'relative',
    padding: '65px 25px 25px',
    '&:after': {
            content: '""',
            position: 'absolute',
            top: '-180px',
            left: '-50px',
            right: '0',
            bottom: '0',
            zIndex: '-1',
            borderRadius: '0 0 50% 50%',
            width: '350px',
            height: '350px',
            background: "#2fbf71",
    }
}


const SideMenuBar = () => {
    return ( <Box width={'250px'} position={'fixed'} bottom={0} top={0} backgroundColor={"menuBarColorLight"}>
    <Box height={'calc(100% - 50px);'}>
        <Box sx={menuHeaderTop}>
            <SideMenuHeaderImage/>
            <SideMenuHeaderText/>
        </Box>
        <List paddingTop={'45px'} paddingBottom={'45px'}>
            <ListItem >

            </ListItem>
        </List>
    </Box>
</Box> );
}
 
export default SideMenuBar;