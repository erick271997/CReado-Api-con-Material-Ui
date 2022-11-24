import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { Fragment, userState } from "react";
import PaperInformation from "../../../PaperInformation./PaperInformation";


const Description =(props)=>{
    const {userState}= props;
    const {bio} =userState;
    return(
        <Fragment>
            <Stack>
            {bio !== null 
          ? <Typography >{bio}</Typography>
          : <Typography>Lorem ipsum dolor sit amet. Ea excepturi doloribus ea praesentium nihil nam dolore laboriosam ad fugit nobis</Typography>
        }
            </Stack>
                <PaperInformation userState={userState}/>
           {/*  <LocationInfomation/> */}
        </Fragment>

    )
}

export default Description;