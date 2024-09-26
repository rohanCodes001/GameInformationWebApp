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
  

function PostGameInfo () {
    const [inputField, setInputField] = useState<VideoGameInfo>({
        GameId: 1,
        GameTitle: '',
        GameDescription: '',
        GamePlatform: '',
        YearReleased: '',
      });

      const handleInput = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        if (name === 'Select') {
          inputField.GamePlatform = e.target.value;
        }
        setInputField((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      function containsAnyLetters(str: string): boolean {
        return letterRegExp.test(str);
      }
    
      function containsNumbers(str: string): boolean {
        return numbersRegExp.test(str);
      }

      function checkYear(str: string): boolean {
        return isValidYear.test(str);
      }
    

    const isErrorGameDescription = inputField.GameDescription === '';
    const isErrorGameTitle = inputField.GameTitle === '';
    const isErrorGameYear =
    inputField.YearReleased.toString() === '' ||
    containsAnyLetters(inputField.YearReleased.toString()) ||
    inputField.YearReleased.toString() === '0' || !checkYear(inputField.YearReleased);

    const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      console.log(inputField);
  
      const customConfig = {
        headers: {
          'Content-Type': 'application/json',
          accept: 'text/plain',
        },
      };
      const data = JSON.stringify({
        GameTitle: inputField.GameTitle,
        GameDescription: inputField.GameDescription,
        GamePlatform: inputField.GamePlatform,
        GameYear: inputField.YearReleased,
      });
      console.log(data);
      axios
        .post(`${baseURL}/api/GamePost`, data, customConfig)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response.data);
          alert('Post submission error.');
        });
    };
  


    return (
        <Center backgroundColor="blue.100">
          <Container centerContent>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
              User Game Post Form
            </Heading>
            <br />
            <Box
              border="2px"
              borderColor="blue.500"
              boxShadow="dark-lg"
              borderRadius="15px"
              backgroundColor="blue.200"
            >
              <FormControl isInvalid={isErrorGameTitle}>
                <Center>
                  <FormLabel>Enter your game title</FormLabel>
                </Center>
                <Input
                  type="text"
                  placeholder="Game Title"
                  value={inputField.GameTitle}
                  name="GameTitle"
                  onChange={handleInput}
                />
                {!isErrorGameTitle ? (
                  <FormHelperText>Enter your game title.</FormHelperText>
                ) : (
                  <FormErrorMessage>
                    Invalid game title. Game title cannot be empty.
                  </FormErrorMessage>
                )}
              </FormControl>

              <br />

              <FormControl isInvalid={isErrorGameDescription}>
                <Center>
                    <FormLabel>Enter your game description</FormLabel>
                </Center>
                <Input
                type="text"
                placeholder="Enter your game description"
                value={inputField.GameDescription}
                name="GameDescription"
                onChange={handleInput}
                />
                {!isErrorGameDescription ? (
                <FormHelperText>Enter your game description.</FormHelperText>
                ) : (
                <FormErrorMessage>
                Game description is required.
                </FormErrorMessage>
                )}
              </FormControl>
              
              <br />

              <FormControl>
                <Center>
                    <FormLabel>Pick your Game Platform</FormLabel>
                </Center>
                <Select
                    id="dropdown"
                    aria-label="Game Platform Selection Menu"
                    onChange={handleInput}
                    name="Select"
                >
                <option>Xbox</option>
                <option>PlayStation</option>
                <option>Nintendo</option>
                <option>PC</option>
                </Select>
              </FormControl>

              <br />

              <FormControl isInvalid={isErrorGameYear}>
                <Center>
                    <FormLabel>Enter your games release year</FormLabel>
                </Center>
                    <Input
                    type="text"
                    placeholder="Enter your Game year"
                    value={inputField.YearReleased}
                    name="YearReleased"
                    onChange={handleInput}
                />
                {!isErrorGameYear ? (
                <FormHelperText>Enter your game release year.</FormHelperText>
                ) : (
                <FormErrorMessage>
                Invalid Game Year. Remember you cannot have letters in the release year or
                0.
                </FormErrorMessage>
                )}
             </FormControl>

             <br />
             
             <Center>
              <Button
                colorScheme="twitter"
                type="submit"
                onClick={handleSubmit}
                disabled={
                isErrorGameDescription ||
                isErrorGameTitle ||
                isErrorGameYear 
                }
                >
                Submit
              </Button>
            </Center>
            </Box>
          </Container>
        </Center>
        );    

}

export default PostGameInfo;