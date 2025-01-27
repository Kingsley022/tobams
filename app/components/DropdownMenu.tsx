import { Button, Menu, MenuButton, MenuList, MenuItem, background } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { PiUserCircleThin } from 'react-icons/pi'

const DropdownMenu = () => {
    return (

        <Menu>
            <MenuButton 
                backgroundColor="#571244" 
                color="white" 
                _hover={{backgroundColor:"#571244"}} 
                _focus={{background: "#571244"}} 
                _active={{background: "#571244"}} 
                as={Button} leftIcon={<PiUserCircleThin className='text-2xl'/>} 
                rightIcon={<BsChevronDown/>} 
                className="m-4">
                Account
            </MenuButton>
            <MenuList>
                <MenuItem>Sign in</MenuItem>
                <MenuItem>Sign out</MenuItem>
            </MenuList>
        </Menu>
    
    )
}

export default DropdownMenu