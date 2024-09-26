import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PostGameInfo from './components/PostGameInfo';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom";
import Simple from './navbar';
import { BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import EditGameInfo from './components/EditGameInfo';
import DisplayAllPosts from './components/DisplayAllPosts';

function App() {

  /*
  return (
  <ChakraProvider>
  <div><Simple /></div>
  </ChakraProvider>
  );
  */

  return (
    <ChakraProvider>
     <div><Simple /></div>
    <BrowserRouter>
        <Routes>
        <Route path = "/home" element = {<Home />}/>
        <Route path = "/gamePost" element = {<PostGameInfo />}/>
        <Route path = "/gameEdit" element = {<EditGameInfo />}/>
        <Route path = "/gameDisplay" element = {<DisplayAllPosts />}/>
        </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;