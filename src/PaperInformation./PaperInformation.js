import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, {userState }from "react";

const PaperInformation = (props)=>{
    const {userState}= props;
    const {
        public_repos,
        followers,
        following
    }= userState;
    return(
        <Paper elevation={3}>
            <Stack>
                <Stack>
                <Typography>Respos</Typography>
                <Typography>{public_repos}</Typography>
                </Stack>
                <Stack>
                <Typography>Follower</Typography>
                <Typography>{followers}</Typography>
                </Stack>
                <Stack>
                <Typography>Following</Typography>
                <Typography>{following}</Typography>
                </Stack>
            </Stack>
        </Paper>
)
};

export default PaperInformation;