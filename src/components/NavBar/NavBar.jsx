import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Heading, Menu, MenuButton, MenuList, MenuItem, Button, Flex} from '@chakra-ui/react'
import { LuCoffee } from "react-icons/lu"
import './NavBar.css'
import { FaAngleDown } from "react-icons/fa"
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <Flex justify={'space-between'} align={'center'} className = 'navbar'>
        <Heading><Link to ='/'><LuCoffee /></Link></Heading>
        <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}> 
            Tipo de Cafe
        </MenuButton>
            <MenuList>
                <MenuItem><Link to='/categoria/Espresso'>Espresso</Link></MenuItem>
                <MenuItem><Link to='/categoria/Americano'>Americano</Link></MenuItem>
                <MenuItem><Link to='/categoria/Especiales'>Especiales</Link></MenuItem>
            </MenuList>
        </Menu>
        <Link to ='/cart'>
        <CartWidget />
        </Link>
    </Flex>
    
  )
}

export default NavBar