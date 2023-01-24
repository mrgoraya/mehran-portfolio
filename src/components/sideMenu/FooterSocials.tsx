import { Icon } from '@chakra-ui/react';
import * as React from 'react';

const MenuBarFooterSocials = (props:any) => {
    const {socials, onClick} = props;
    return ( <Icon color={'#0b0b13'} fontSize={'1.3rem'} marginRight={'0.5rem'} _hover={{color: '#2fbf71', cursor: 'pointer'}} onClick={()=>onClick(socials.name)} transition={'ease all 0.25s'}>
        <socials.icon/>
    </Icon> );
}
 
export default MenuBarFooterSocials;