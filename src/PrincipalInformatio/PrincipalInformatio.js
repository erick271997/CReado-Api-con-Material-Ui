import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { Fragment } from "react";


function PrincipalInformatio (props){
    const {userState} = props;
    const {name,login,created_at,}= userState;

    return(
        <Fragment> {/* se le pones Fragment cuando vamos a pasar muchos componente */} 
            <Stack>
                <Typography >{name}</Typography>
                <Typography>{created_at}</Typography>
            </Stack>
            <Typography>{login}</Typography>
        </Fragment>
    )
}

export default PrincipalInformatio;