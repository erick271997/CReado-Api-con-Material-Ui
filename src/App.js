
/* import './App.css'; */

import React, { useEffect, useState } from "react";
import { Container } from '@mui/material';
import Searcher from "./Search/Searcher";
import getGitHubUser from './Serivice/user';

function App() {

  const [inputUser, setInputUser]= useState('octocal');
  const[userStater, userState]= useState('imputUser');
  
const gettinUser= async (user)=>{
  const userResponse = await getGitHubUser(user)
}

useEffect(()=>{
  gettinUser(inputUser)
},
[])


  return (
    <Container sx= {{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
    <Searcher inputUser={inputUser} setInputUser={setInputUser}/>


    </Container>
   
  );
}

export default App;
