import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Grid, Hidden

} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '5%',
        marginTop: '5%',
        [theme.breakpoints.down('sm')]: {
            padding: '5%',
            marginTop: '5%',

        },
        [theme.breakpoints.down('xs')]: {
            padding: '15%',
            marginTop: '2%',
        }

    }
}))

function GetinTouch() {

    const classes = useStyles()

    return (
        <div className={classes.root} direction={"row"} justify={"center"}>
            <Typography variant={"h1"} style={{ textAlign: "center" }}>GET IN TOUCH</Typography>
        </div>





    )
}

export default GetinTouch