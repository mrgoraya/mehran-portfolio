import React from 'react';
import { portfolioOwnerName } from '../../components/static';

import { Box, Heading, Image, List, ListItem } from '@chakra-ui/react';
import { createUseStyles } from 'react-jss';

import _mehranImage from '../../assets/mehran.png';

const useStyles = createUseStyles({
    menuHeaderTop: {
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
    },
    menuImage: {
            width: '120px',
            height: '120px',
            overflow: 'hidden',
            display: 'inline-block',
            verticalAlign: 'top',
            borderRadius: '50%',
            border: '5px solid #fff'
    },
    menuText: {
        margin: '23px 0 0',  
        fontWeight: '400',
        textTransform: 'uppercase',
        fontSize: '14px',
        letterSpacing: '3px',
        color: '#0c0c14',
    },
    menuListItem: {
        width: '100%',
        

    }
})


const SideMenuBar = () => {
    const classes = useStyles();
    return ( <Box width={'250px'} position={'fixed'} bottom={0} top={0} backgroundColor={"menuBarColorLight"}>
    <Box height={'calc(100% - 50px);'}>
        <Box className={classes.menuHeaderTop}>
            <Box className={classes.menuImage}>
                <Image src={_mehranImage}></Image>
            </Box>
            <Heading as={'h5'} size={'sm'} className={classes.menuText}>
                {portfolioOwnerName}
            </Heading>
        </Box>
        <List paddingTop={'45px'} paddingBottom={'45px'}>
            <ListItem >

            </ListItem>
        </List>
    </Box>
</Box> );
}
 
export default SideMenuBar;