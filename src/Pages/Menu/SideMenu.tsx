import React from 'react';
import { Box } from '@chakra-ui/react';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
    menuImage: {
            width: '120px',


//         width: '120px',
//   height: 120px;
//   overflow: hidden;
//   display: inline-block;
//   vertical-align: top;
//   border-radius: 50%;
//   border: 5px solid #fff;
    }
})


const SideMenuBar = () => {
    return ( <Box width={'250px'} position={'fixed'} bottom={0} top={0} backgroundColor={'#0c0c14'}>
    <Box height={'calc(100% - 50px);'}>
        <Box textAlign={'center'} position={'relative'} padding={'65px 25px 25px'}>
            <Box textColor={"#ffffff"}>
                logo
            </Box>
        </Box>
    </Box>
</Box> );
}
 
export default SideMenuBar;