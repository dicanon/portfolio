import React from 'react'
import GirlWheel from '../../assets/Girl_wheel.svg'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Grid, Box
} from '@material-ui/core'




const useStyles = makeStyles((theme) =>({

    root: {
        margin: "12vh 0vw",

        [theme.breakpoints.down('sm')]: {
            margin: "5vh 0vw"

        },
        [theme.breakpoints.down('xs')]: {
            margin: "0vh 0vw"
        }

    },

    GirlImg: {
        width: '100%'
    },
    justifyText: {
        textAlign: 'justify',
        display: 'inline-block',
        width: '100%',
        margin: '7px'
    }})
    )

function Hello() {

    const classes = useStyles()

    return (
        <Grid item container direction={"row"} className={classes.root}>
            <Box clone order={{ xs: 2, sm: 1, md: 1, lg: 1 }}>
                <Grid item md={2} sm={2} xs={2} />
            </Box>

            <Box clone order={{ xs: 3, sm: 2, md: 2, lg: 2 }}>
                <Grid item container md={5} sm={5} xs={8} direction="row" alignItems="center" alignContent="center">
                    <Grid item md={10} className={classes.justifyText}>
                        <Typography variant={"h1"}>HELLO!
                        </Typography>
                    </Grid>


                    <Grid item md={10} className={classes.justifyText}>
                        <Typography variant={"body1"}>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box clone order={{ xs: 1, sm: 3, md: 3, lg: 3 }}>
                <Grid item container
                    justify={"center"}
                    alignItems={"center"}
                    sm={3} xs={12} md={3}>
                    <Grid item md={12} sm={12} xs={4}>
                        {<img className={classes.GirlImg} src={GirlWheel} />}
                    </Grid>
                </Grid>

            </Box>
        </Grid >
    )
}

export default Hello