
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegIdBadge} from 'react-icons/fa'
import {GrBusinessService} from 'react-icons/gr'
import {BsBookmarks} from 'react-icons/bs'
import {GrBlog} from 'react-icons/gr'
import {BsMap} from 'react-icons/bs'

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'



export const portfolioOwnerName: string = 'Mehran Rasheed';

export const sideMenuTabs: Array<Object> = [
    {id: 1, name: 'Home', icon: AiOutlineHome},
    {id: 2, name: 'About Me', icon: FaRegIdBadge},
    {id: 3, name: 'Services', icon: GrBusinessService},
    {id: 4, name: 'Portfolio', icon: BsBookmarks},
    {id: 5, name: 'Blogs', icon: GrBlog},
    {id: 6, name: 'Contact Me', icon: BsMap},
]

export const sideMenuSocials: Array<Object> = [
    {id: 1, name: 'facebook', icon: FaFacebookF, link:''},
    {id: 2, name: 'twitter', icon: FaTwitter, link:''},
    {id: 3, name: 'instagram', icon: FaInstagram, link:''},
    {id: 4, name: 'linkdin', icon: FaLinkedinIn, link:''},
    {id: 5, name: 'pinterest', icon: FaPinterest, link:''},
]
