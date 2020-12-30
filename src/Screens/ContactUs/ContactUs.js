import React from 'react'
import GirlWheel from '../../assets/Girl_wheel.svg'
import { makeStyles } from '@material-ui/core/styles'
import {
    Hidden,
    Grid, Box
} from '@material-ui/core'
import TextFieldBox from './TextFieldBox'
import GetinTouch from './GetinTouch'
import ContactBar from './ContactBar'
import theme from "../../Theme";

const useStyles = makeStyles({

    root: {
        padding: '50px',
        margin: "15vh 0vw",
        [theme.breakpoints.down('sm')]: {
            margin: "5vh 0vw",
            padding: '30px',

        },
        [theme.breakpoints.down('xs')]: {
            margin: "0vh 0vw",
            padding: '20px',
 
        }

    },
    textFieldBox: {
        width: '100%',

    },
    contactBarRoot: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: "8.33%",

        }
    }
})

function ContactUs() {

    const classes = useStyles()

    return (
        <Grid item container direction={"row"} className={classes.root}>
            <Grid item md={12} sm={12} xs={12}>
                <GetinTouch />
            </Grid>

            <Grid item container direction sm={12} xs={12} md={12}>
                <Box clone order={{ xs: 3, sm: 1, md: 1, lg: 1 }}>
                    <Grid item md={1} sm={1} xs={1} />
                    </Box>
                <Box clone order={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                    <Grid item md={5} sm={4} xs={12} className={classes.contactBarRoot} >
                        <ContactBar /></Grid>
                        </Box>
                <Box clone order={{ xs: 4, sm: 4, md: 3, lg: 4 }}>
                    <Grid item md={5} sm={6} xs={11}>
                        <TextFieldBox /></Grid>
                </Box>
            </Grid>


        </Grid>






    )
}

export default ContactUs