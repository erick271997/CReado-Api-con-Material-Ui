
import { CardMedia, Grid } from "@mui/material";
import React from "react";
import PrincipalInformatio from "../../PrincipalInformatio/PrincipalInformatio";
import Description from "./Descriptio/Description";


const UserCard=(props)=>{
const {userState}=props
const {avatar_url}= userState;

return(
    <Grid container spacing={0}>
    <Grid item xs={3}>
        <CardMedia
        component='img'
        alt="GitHub user"
        image={avatar_url}
        />
    </Grid>
    <Grid Item xs={9}>
      <PrincipalInformatio userState={userState}/>  
    </Grid>
    
    <Description userState={userState} />
    </Grid>
)
}

export default UserCard