import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {
    Box,
    Button,
    Center,
    Container,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Select,
    Text,
  } from '@chakra-ui/react';

  import { VideoGameInfo } from '../models/interfaces';
  import {
    letterRegExp,
    numbersRegExp,
    emailRegExp,
    dateRegExp,
    isValidYear,
  } from '../helpers/regexes';

  const baseURL = 'https://localhost:7026';


function DisplayAllPosts(){
    const [gamePosts, setGamePosts] = useState<VideoGameInfo[]>([]);

    useEffect(() => {
        axios
            .get(`${baseURL}/api/GamePost`)
            .then((response) => {
                console.log(response.data.value);
                const gamePostsTemp: VideoGameInfo[] =
                    response.data.value.map((data: any) => ({
                    GameId: data.gameId,
                    GameTitle: data.gameTitle,
                    GameDescription: data.gameDescription,
                    GamePlatform: data.gamePlatform,
                    YearReleased: data.gameYear,
            }));
                setGamePosts(gamePostsTemp);
            })
            .catch((error) => {
                console.log(error);
            });
    
    }, []);

    console.log(gamePosts);

    return(
        <Center backgroundColor="blue.100">
          <Container centerContent>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
              All Game Posts 
            </Heading>
            {gamePosts.map(gamePost => (
            <Box key = {gamePost.GameId}
                border="2px"
                borderColor="blue.500"
                boxShadow="dark-lg"
                borderRadius="15px"
                backgroundColor="blue.200"
                marginBottom="10px"
                >
                <Text
                fontSize="20"
                fontWeight="bold"
                marginTop="10px"
                fontFamily="Helvetica"
                display="inline"
                >
                    Game Title: {gamePost?.GameTitle}
                    <br/>
                    Game Description: {gamePost?.GameDescription}
                    <br/>
                    Game Platform: {gamePost?.GamePlatform}
                    <br/>
                    Release Year: {gamePost?.YearReleased}
                    <br/>
                </Text>
            </Box>
            ))}
          </Container>
        </Center>
    );
}



export default DisplayAllPosts;