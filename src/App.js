
/* import './App.css'; */

import React, { useEffect, useState } from "react";
import { Container } from '@mui/material';
import Searcher from "./Search/Searcher";
import getGitHubUser from './Serivice/user';
import UserCard from "./Container/Usercard/UserCard";

function App() {

  const [inputUser, setInputUser]= useState('octocat');
  const[userState, setUState]= useState('imputUser');
  const [notFound, setNofound]= useState(false);  


  const gettinUser= async (user)=>{
  const userResponse = await getGitHubUser(user)
    if (userState === 'octocat') {
      localStorage.setItem('octocal', userResponse)
    }
    if(userResponse.message === 'No Found'){
      const{octocat}=localStorage;
      setInputUser(octocat);
      setNofound(true);
    }else{
      setUState(userResponse)
    }

}

useEffect(()=>{
  gettinUser(inputUser)
},
[inputUser])


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
    <UserCard userState= {userState}/>

    </Container>
   
  );
}

export default App;
