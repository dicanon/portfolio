import {makeStyles, TextField} from "@material-ui/core";
import React from "react";
import {withStyles} from "@material-ui/styles";
import theme from "../../Theme";

export const CustomTextField = withStyles((theme) => ({

root: {
    '& .MuiFilledInput-root': {
        backgroundColor : "#393646",
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px'

    },
    

    '& .MuiFilledInput-root:hover': {
        backgroundColor : '#560B46',
    },

    '& .MuiFilledInput-inputMarginDense': {
        paddingTop: '20px',
        paddingBottom: '8px'
}}

})
)(TextField)
