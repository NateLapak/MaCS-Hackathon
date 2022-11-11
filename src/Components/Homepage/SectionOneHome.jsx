import { Box, Text, Input, Center, Button, Stack, Link} from "@chakra-ui/react"
import {Link as RouteLink} from "react-router-dom"


// First section of homepage
const SectionOneHome = () => {
    return (
        <Box p={20} m={8} fontFamily="Open sans">

            <Text m={5} fontSize={[100, 60]} textAlign="center">
                Movie rental system
            </Text>

            <Text fontSize="20" textAlign="center">
                Create an account and start renting movies today
            </Text>

            <Center m={10} p={5}>
                <Input htmlSize={150} width='auto' placeholder="Search for movies here" />
            </Center>

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

            <Text textAlign="center" m={20} fontSize="50px">
                MaCS Hackathon 2022
            </Text>
        </Box>
    )
}

export default SectionOneHome