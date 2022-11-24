import React, { useState } from "react";
import { Stack,  } from "@mui/system";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const Searcher= (props)=>{

    const {
        inputUser,
        setInputUser
    } = props;

    const [valueinput, setValueinput]= useState('');


    const onSearchCalueChange=(event)=>{
        const inputValue= event.target.value
        setValueinput(inputValue);
    }

    console.log('valueInpu', valueinput);

    const handleSubmit=()=>{
        setInputUser(valueinput);
        
    }


    return(
        <Stack 
        
        direction ='row'
        sx={{
           
            marginTop:'30px',
            width:'80%',

        }}
        
        >
            
            <TextField     
            id="outlined-basic"
            label="Search User" 
            placeholder='Erick'
            variant="outlined"
            size="small"
            value={valueinput}
            onChange={onSearchCalueChange}
            sx={{
                width:'90%',

            }}
            />
            <IconButton 
            onClick={handleSubmit}
            size="small"
            sx ={{
                left:'-45px'

            }}>
               <SearchIcon/>
            </IconButton>
            
        </Stack>
    )
}



export default Searcher;