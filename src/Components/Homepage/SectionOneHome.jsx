import React, { useState } from 'react';

import { Heading, Box, Text, Input, Center, Button, Stack, Link, Image, useColorModeValue} from "@chakra-ui/react"
import {Link as RouteLink} from "react-router-dom"

const HoverThumbnailOne = () => {
    return (
        <div className='thumbnail'>
           <iframe src="https://www.youtube.com/embed/giXco2jaZ_4?autoplay=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}


// First section of homepage
const SectionOneHome = () => {
    const [isHoveringOne, setIsHoveringOne] = useState(false)

    const handleMouseOverOne = () => {
        setIsHoveringOne(true);
    }
    return (
        <div>
            <div>
                {isHoveringOne && <HoverThumbnailOne />}    
            </div>

            <div>
            {/* Header */}
            <Text m={5} fontSize={[30, 40, 70, 75]} textAlign="center">
                Movie rental system
            </Text>

            {/* Sub-Header */}
            <Text fontSize={[10, 15, 18, 20]} textAlign="center">
                Create an account and start renting movies today
            </Text>

            {/* Search bar */}
            <Center m={10} p={5}>
                <Input htmlSize={[40, 60, 75, 120]} width='auto' placeholder="Search for movies" />
            </Center>

            {/* Movie card */}
            <Center py={4} my={10}>

                {/* Top gun: Maverick card */}
                <Box maxW={'270px'} w={'full'} bg={useColorModeValue('white', 'gray.800' )} boxShadow={'2xl'} rounded={'md'}overflow={'hidden'} m={3}>
                    <Image h={[100, 125, 150, 175]} w={'full'} src={ 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg'} objectFit={'cover'} 
                        onMouseOver={handleMouseOverOne}
                    />
    
                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={[15, 15, 20, 25]} fontWeight={500} fontFamily={'body'}>
                                Top Gun: Maverick
                            </Heading>
                            <Text color={'gray.500'} fontSize={[10, 10, 15, 20]}>Joseph Kosinski</Text>
                        </Stack>
    
                        <Stack direction={'row'} justify={'center'} spacing={[2, 3, 5, 6]}>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600} fontSize={[8, 10, 12, 16]}>8.4/10</Text>
                                <Text fontSize={[8, 10, 15]} color={'gray.500'}>
                                    on IMDB
                                </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600} fontSize={[8, 10, 12, 16]}>96%</Text>
                                <Text fontSize={[8, 10, 15]} color={'gray.500'}>
                                    Rotten tomatoes
                                </Text>
                            </Stack>
                        </Stack>
    
                        <Button fontSize={[12, 15, 18, 20]} w={'full'} mt={8} bg={useColorModeValue('#151f21', 'gray.900' )} color={'white'} rounded={'md'} _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg'}}>
                            Rent
                        </Button>
                    </Box>
                </Box>

                {/* Black Panther: Wakanda Forever card */}
                <Box maxW={'270px'} w={'full'} bg={useColorModeValue('white', 'gray.800' )} boxShadow={'2xl'} rounded={'md'}overflow={'hidden'} m={5}>
                    <Image h={[100, 125, 150, 185]} w={'full'} src={ 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'} objectFit={'cover'} />
    
                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={[12, 15, 18, 20]} fontWeight={500} fontFamily={'body'}>
                                The Godfather
                            </Heading>
                            <Text fontSize={[10, 10, 15, 18]} color={'gray.500'}>Francis Ford Coppola</Text>
                        </Stack>
    
                        <Stack direction={'row'} justify={'center'} spacing={[2, 3, 5, 6]}>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600} fontSize={[8, 10, 12, 16]}>9.2/10</Text>
                                <Text fontSize={[8, 10, 15]} color={'gray.500'}>
                                    on IMDB
                                </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600} fontSize={[8, 10, 12, 16]}>97%</Text>
                                <Text fontSize={[8, 10, 15]} color={'gray.500'}>
                                    Rotten tomatoes
                                </Text>
                            </Stack>
                        </Stack>
    
                        <Button fontSize={[12, 15, 18, 18]} w={'full'} mt={8} bg={useColorModeValue('#151f21', 'gray.900' )} color={'white'} rounded={'md'} _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg'}}>
                            Rent
                        </Button>
                    </Box>
                </Box>

                {/* Barbarian card */}
                <Box maxW={'270px'} w={'full'} bg={useColorModeValue('white', 'gray.800' )} boxShadow={'2xl'} rounded={'md'}overflow={'hidden'} m={5}>
                    <Image h={[100, 125, 150, 185]} w={'full'} src={ 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg'} objectFit={'cover'} />
    
                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={[12, 15, 18, 20]} fontWeight={500} fontFamily={'body'}>
                                Dark Knight
                            </Heading>
                            <Text fontSize={[10, 10, 15, 18]} color={'gray.500'}>Christopher Nolan</Text>
                        </Stack>
    
                        <Stack direction={'row'} justify={'center'} spacing={[2, 3, 5, 6]}>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600}  fontSize={[8, 10, 12, 16]} >9.0/10</Text>
                                <Text fontSize={[8, 10, 15]} color={'gray.500'}>
                                    on IMDB
                                </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600}  fontSize={[8, 10, 12, 16]}>94%</Text>
                                <Text fontSize={[8, 10, 15]} color={'gray.500'}>
                                    Rotten tomatoes
                                </Text>
                            </Stack>
                        </Stack>
    
                        <Button fontSize={[12, 15, 18, 18]} w={'full'} mt={8} bg={useColorModeValue('#151f21', 'gray.900' )} color={'white'} rounded={'md'} _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg'}}>
                            Rent
                        </Button>
                    </Box>
                </Box>

            </Center>
            
            {/* Create account and login buttons */}
            <Center>
                <Stack direction='row' spacing={4} align='center'>

                    <Button colorScheme='blue' variant='solid' size="lg">
                        <Link as={RouteLink} to="/register">
                        Create account
                        </Link>
                    </Button>

                    <Button colorScheme='blue' variant='solid' size="lg">
                        <Link as={RouteLink} to="/login">
                        Login
                        </Link>
                    </Button>

                </Stack>
            </Center>

            {/* MaCS hackthon text */}
            <Text textAlign="center" m={20} fontSize={[15, 20, 40, 60]}>
                MaCS Hackathon 2022
            </Text>
            </div>

        </div>

    )
}

export default SectionOneHome