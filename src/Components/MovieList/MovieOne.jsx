import React, { useState } from 'react';
import {Heading, Box, Center, Image, Text, Stack, Button, useColorModeValue, Input} from '@chakra-ui/react';

// Function that displays the iframe when you hover over the thumbnail. Top Gun Maverick
const HoverThumbnailOne = () => {
    return (
        <div className='thumbnail'>
           <iframe src="https://www.youtube.com/embed/giXco2jaZ_4?autoplay=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

const MovieOne = () => {
    const [isHoveringOne, setIsHoveringOne] = useState(false)

    const handleMouseOverOne = () => {
        setIsHoveringOne(true);
    }

    return (
        <div>

            <div>
                {isHoveringOne && <HoverThumbnailOne />}    
            </div>

            {/* Header for movie list */}
            <Center py={15} my={10}>
                <Text fontSize={[17, 25, 30, 40]}>Browse our selection of movies for rental</Text>
            </Center>

            {/* Search bar */}
            <Center m={10} p={5}>
                <Input htmlSize={[40, 60, 75, 120]} width='auto' placeholder="Search for movies here" />
            </Center>


            {/* New releases */}
            <Center my={10}>
                <Text fontSize="30px">New releases</Text>
            </Center>
            
            {/* Top Gun: Maverick card */}
            <Center py={4} my={10}>
                <Box maxW={'270px'} w={'full'} bg={useColorModeValue('white', 'gray.800' )} boxShadow={'2xl'} rounded={'md'}overflow={'hidden'} m={5}>
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
                    <Image h={[75, 100, 125, 175]} w={'full'} src={ 'https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg'} objectFit={'cover'} />
    
                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={[12, 15, 18, 20]} fontWeight={500} fontFamily={'body'}>
                                Black Panther: Wakanda Forever
                            </Heading>
                            <Text fontSize={[10, 10, 15, 18]} color={'gray.500'}>Marvel Studios</Text>
                        </Stack>
    
                        <Stack direction={'row'} justify={'center'} spacing={[2, 3, 5, 6]}>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600} fontSize={[8, 10, 12, 16]}>7.4/10</Text>
                                <Text fontSize={[8, 10, 15]} color={'gray.500'}>
                                    on IMDB
                                </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600} fontSize={[8, 10, 12, 16]}>84%</Text>
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

                {/* Barbarian card */}
                <Box maxW={'270px'} w={'full'} bg={useColorModeValue('white', 'gray.800' )} boxShadow={'2xl'} rounded={'md'}overflow={'hidden'} m={5}>
                    <Image h={[105, 125, 150, 180]} w={'full'} src={ 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Barbarian_2022_film_poster.png/220px-Barbarian_2022_film_poster.png'} objectFit={'cover'} />
    
                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={[12, 15, 18, 20]} fontWeight={500} fontFamily={'body'}>
                                Barbarian
                            </Heading>
                            <Text color={'gray.500'} fontSize={[10, 10, 15, 18]}>Zach Cregger</Text>
                        </Stack>
    
                        <Stack direction={'row'} justify={'center'} spacing={[2, 3, 5, 6]}>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600} fontSize={[8, 10, 12, 16]}>7.1/10</Text>
                                <Text fontSize={[8, 10, 15]} color={'gray.500'}>
                                    on IMDB
                                </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600} fontSize={[8, 10, 12, 16]}>92%</Text>
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
    
            </Center>

            {/* Highest rated section*/}
            <Center my={10}>
                <Text fontSize="30px">Highest rated</Text>
            </Center>

            {/* Shawshank redemption card */}
            <Center py={4} my={10}>
                <Box maxW={'270px'} w={'full'} bg={useColorModeValue('white', 'gray.800' )} boxShadow={'2xl'} rounded={'md'}overflow={'hidden'} m={5}>
                    <Image h={[105, 125, 150, 180]} w={'full'} src={ 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg'} objectFit={'cover'} />
    
                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={[12, 15, 18, 20]} fontWeight={500} fontFamily={'body'}>
                                The Shawshank Redemption
                            </Heading>
                            <Text fontSize={[10, 10, 15, 18]} color={'gray.500'}>Frank Darabont</Text>
                        </Stack>
    
                        <Stack direction={'row'} justify={'center'}  spacing={[2, 3, 5, 6]}>
                            <Stack spacing={0} align={'center'}>
                                <Text fontSize={[8, 10, 12, 16]} fontWeight={600}>9.3/10</Text>
                                <Text fontSize={[8, 10, 15]} color={'gray.500'}>
                                    on IMDB
                                </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                                <Text fontSize={[8, 10, 12, 16]} fontWeight={600}>91%</Text>
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

                {/* The Godfather card */}
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

                {/* Dark knight card */}
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

            
            {/* Highest grossing */}
            <Center my={10}>
                <Text fontSize="30px">Highest grossing</Text>
            </Center>

            {/* Avatar card */}
            <Center py={4} my={10}>
                <Box maxW={'270px'} w={'full'} bg={useColorModeValue('white', 'gray.800' )} boxShadow={'2xl'} rounded={'md'}overflow={'hidden'} m={5}>
                    <Image h={[100, 125, 150, 185]} w={'full'} src={ 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Avatar_%282009_film%29_poster.jpg/220px-Avatar_%282009_film%29_poster.jpg'} objectFit={'cover'} />
    
                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={[12, 15, 18, 20]} fontWeight={500} fontFamily={'body'}>
                                Avatar
                            </Heading>
                            <Text fontSize={[10, 10, 15, 18]} color={'gray.500'}>James Cameroon</Text>
                        </Stack>
    
                        <Stack direction={'row'} justify={'center'} spacing={[2, 3, 5, 6]}>
                            <Stack spacing={0} align={'center'}>
                                <Text fontSize={[8, 10, 12, 16]} fontWeight={600}>7.8/10</Text>
                                <Text fontSize={[8, 10, 15]} color={'gray.500'}>
                                    on IMDB
                                </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                                <Text fontSize={[8, 10, 12, 16]} fontWeight={600}>82%</Text>
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

                {/* Avengers: Endgame card */}
                <Box maxW={'270px'} w={'full'} bg={useColorModeValue('white', 'gray.800' )} boxShadow={'2xl'} rounded={'md'}overflow={'hidden'} m={5}>
                    <Image h={[100, 125, 150, 185]} w={'full'} src={ 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg'} objectFit={'cover'} />
    
                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={[12, 15, 18, 20]} fontWeight={500} fontFamily={'body'}>
                                Avengers: Endgame
                            </Heading>
                            <Text fontSize={[10, 10, 15, 18]} color={'gray.500'}>Marvel Studios</Text>
                        </Stack>
    
                        <Stack direction={'row'} justify={'center'} spacing={[2, 3, 5, 6]}>
                            <Stack spacing={0} align={'center'}>
                                <Text fontSize={[8, 10, 12, 16]} fontWeight={600}>8.4/10</Text>
                                <Text fontSize={[8, 10, 15]} color={'gray.500'}>
                                    on IMDB
                                </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                                <Text fontSize={[8, 10, 12, 16]} fontWeight={600}>94%</Text>
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

                {/* Titanic card */}
                <Box maxW={'270px'} w={'full'} bg={useColorModeValue('white', 'gray.800' )} boxShadow={'2xl'} rounded={'md'}overflow={'hidden'} m={5}>
                    <Image h={[100, 125, 150, 185]} w={'full'} src={ 'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png'} objectFit={'cover'} />
    
                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={[12, 15, 18, 20]} fontWeight={500} fontFamily={'body'}>
                                Titanic
                            </Heading>
                            <Text fontSize={[10, 10, 15, 18]} color={'gray.500'}>James Cameroon</Text>
                        </Stack>
    
                        <Stack direction={'row'} justify={'center'} spacing={[2, 3, 5, 6]}>
                            <Stack spacing={0} align={'center'}>
                                <Text fontSize={[8, 10, 12, 16]} fontWeight={600}>7.9/10</Text>
                                <Text fontSize={[8, 10, 15]} color={'gray.500'}>
                                    on IMDB
                                </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                                <Text fontSize={[8, 10, 12, 16]} fontWeight={600}>87%</Text>
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
        </div>
    )
}

export default MovieOne