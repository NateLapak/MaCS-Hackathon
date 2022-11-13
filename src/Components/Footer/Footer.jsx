import {Box,Container, Link, SimpleGrid, Stack, Text, Flex, useColorModeValue} from '@chakra-ui/react';

import {Link as RouteLink} from "react-router-dom"

const Footer = () => {
    return (
    <Box bg="black" color="white">
        <Container as={Stack} maxW={'6xl'} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                <Stack align={'flex-start'}>
                    <Link as={RouteLink} to="/">Overview</Link>
                </Stack>
                <Stack align={'flex-start'}>
                    <Link>About Us</Link>
                </Stack>
                <Stack align={'flex-start'}>
                    <Link>Cookies Policy</Link>
                </Stack>
                <Stack align={'flex-start'}>
                    <Link>Facebook</Link>
                </Stack>
            </SimpleGrid>
        </Container>
        <Box py={10}>
            <Flex align={'center'} _before={{
                    content: '""',
                    borderBottom: '1px solid',
                    borderColor: useColorModeValue('gray.200', 'gray.700'),
                    flexGrow: 1,
                    mr: 8,
                    }} _after={{
                    content: '""',
                    borderBottom: '1px solid',
                    borderColor: useColorModeValue('gray.200', 'gray.700'),
                    flexGrow: 1,
                    ml: 8,
                    }}>
            </Flex>
            <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                © MaCS all rights reserved
            </Text>
        </Box>
    </Box>
    )
}

export default Footer