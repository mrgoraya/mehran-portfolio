import * as React from 'react';

import { Box } from '@chakra-ui/react';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
    menuImage: {
            width: '120px',
            height: '120px',
            overflow: 'hidden',
            display: 'inline-block',
            verticalAlign: 'top',
            borderRadius: '50%',
            border: '5px solid #fff'
    }
})


const SideMenuBar = () => {
    const classes = useStyles();
    return ( <Box width={'250px'} position={'fixed'} bottom={0} top={0} backgroundColor={"menuBarColor"}>
    <Box height={'calc(100% - 50px);'}>
        <Box textAlign={'center'} position={'relative'} padding={'65px 25px 25px'}>
            <Box className={classes.menuImage}>
                logo
            </Box>
        </Box>
    </Box>
</Box> );
}
 
export default SideMenuBar;