import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Grid, Hidden

} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.common.violet_gray,
        padding: '3%',
        // marginTop: '2%',





    }
}))


function Footer() {

    const classes = useStyles()


    return (
        <Grid className={classes.root} justify={'center'} direction={'row'}>
            <Grid item container direction={"row"} justify={"center"}>
                <Grid item container md={5} justify={"space-around"}>
                    <Grid item>
                        <Typography variant={"h4"} style={{textAlign:"center"}}>HOME</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h4"} style={{textAlign:"center"}}>ABOUT ME</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h4"} style={{textAlign:"center"}}>SERVICES</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h4"} style={{textAlign:"center"}}>PROJECTS</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <Typography style= {{textAlign:"center",
                                    marginTop:'5%'}} variant={'h4'}>Designed and developed by <br /> Dianne Canon @ 2020</Typography>
            </Grid>
        </Grid>





    )
}

export default Footer