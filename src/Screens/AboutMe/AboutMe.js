import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid
} from '@material-ui/core'
import Hello from './Hello'
import FollowMe from './FollowMe'
import Skills from './Skills'


const useStyles = makeStyles({
    root: {
        margin: "3vh 0vw"
    },
    GirlImg: {
        width: '100%'
    },
    behanceImg: {
        width: '100%'
    },
    scribbleImg: {
        width: '100%'
    }
})

function AboutMeScreen() {

    const classes = useStyles()

    return (
        <Grid className={classes.root} container direction={"column"}>
            <Hello/>
            <FollowMe/>
            <Skills/>
        </Grid>

    )
}

export default AboutMeScreen