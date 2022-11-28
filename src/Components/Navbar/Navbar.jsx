import {Box, Flex, HStack, Link, IconButton, Menu, useDisclosure, useColorModeValue, Stack} from '@chakra-ui/react';

import {Link as RouteLink} from "react-router-dom"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {

    // Hook that deals with opening and closing hamburger icon
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (

        // Create navbar using box and flex
        <Box bg="black" px={4} fontFamily="Open Sans">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
               <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}/>
                <HStack spacing={8} alignItems={'center'} color="white">
                    <Box>
                        <Link as={RouteLink} to="/" mx={4} px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'),}}>
                            Home
                        </Link>
                        

                        <Link as={RouteLink} to="/movielist" mx={3} px={5} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'),}}>
                            Movie list
                        </Link>

                    </Box>
                </HStack>
                
                <Flex alignItems={'center'}>
                    <Menu>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} color="white">
                            <Link as={RouteLink} to="/register" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'),}}>
                                Register
                            </Link>

                            <Link as={RouteLink} to="/login" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'),}}>
                                Login
                            </Link>        
                        </HStack>
                    </Menu>
                </Flex>
            </Flex>

            {/* Hamburger icon when screen is smaller */}
            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                    
                        <Link color="white" as={RouteLink} to="/register" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.200"}}>
                            Register
                        </Link>

                        <Link color="white" as={RouteLink} to="/login" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.200"}}>
                            Login
                        </Link>

                    </Stack>
                </Box>
            ) : null}
        </Box>

    )
}

export default Navbar