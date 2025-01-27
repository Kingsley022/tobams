import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { PiUserCircleThin } from 'react-icons/pi'

interface Props{
    title: string,
    sub_items: string[],
    isUnderlined?: boolean,
}

const DropdownMenu2 = ({title, sub_items, isUnderlined}:Props) => {
    return (

        <Menu>
            <MenuButton 
                borderRadius={0} 
                borderBottom={isUnderlined ? "1.5px solid #571244" : "none"}
                color={isUnderlined ? "#571244" : "#000"}  
                _focus={{background: "none"}} 
                _hover={{background: "none"}} 
                _active={{background: "none"}} 
                px={0} py={0}
                my={0}
                mx={0} 
                background="none" 
                as={Button} 
                rightIcon={<BsChevronDown className='mt-[0.3rem]'/>} className="m-4">
                    {title}
                </MenuButton>
            <MenuList>
                {sub_items?.map(item => (
                    <MenuItem key={item}>{item}</MenuItem>
                ))}
            </MenuList>
        </Menu>
        
    )
}

export default DropdownMenu2