import React from 'react';
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

// Menu items can be dynamically defined
const menuItems = [
  { label: 'Newest articles', id: 'newest' },
  { label: 'Oldest articles', id: 'oldest' },
];

const DropdownMenu3 = () => {
  return (
    <Menu>
      <MenuButton
        px={6}
        my={0}
        bg="white"
        _focus={{ background: 'white' }}
        _hover={{ background: 'white' }}
        _active={{ background: 'white' }}
        as={Button}
        rightIcon={<BsChevronDown />}
        className="m-4"
      >
        All posts
      </MenuButton>
      <MenuList color="black">
        {menuItems.map((item) => (
          <MenuItem key={item.id}>{item.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu3;
