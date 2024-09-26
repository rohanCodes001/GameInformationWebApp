import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react'
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
  
  interface Props {
    children: React.ReactNode
  }
  
  export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://png.pngtree.com/element_our/20190603/ourmid/pngtree-blue-game-cartoon-illustration-image_1460618.jpg'
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem as='a' href='http://localhost:5173/home'>Home</MenuItem>
                  <MenuItem as='a' href='http://localhost:5173/gamePost'>Game Post Form</MenuItem>
                  <MenuItem as='a' href='http://localhost:5173/gameEdit'>Game Edit Form</MenuItem>
                  <MenuItem as='a' href='http://localhost:5173/gameDisplay'>All Game Posts</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Box>
      </>
    )
  }