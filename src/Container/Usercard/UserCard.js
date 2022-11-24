import { CardMedia, Grid } from "@mui/material";
import React from "react";


const UserCard=(props)=>{
const {userState}=props
const {avatar_url}= userState;

return(
    <Grid
    contenedor
    >
    <Grid item xs={3}>
        <CardMedia
        component='img'
        alt="GitHub user"
        image={avatar_url}
        />
    </Grid>
    <Grid Item xs={9}></Grid>
    </Grid>
)
}

export default UserCard