import React from 'react'
import BehanceLogo from '../../assets/behance 1.svg'
import ScribbleLogo from '../../assets/XMLID 810.svg'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Grid,
} from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        margin: "1vh 0vw"
    },
    behanceImg: {
        width: '100%'
    },
    scribbleImg: {
        width: '100%'

    },
    follow: {
        margin: '1%'
    }
})

function FollowMe() {

    const classes = useStyles()

    return (
            <Grid item container direction={"row"}>
                <Grid item md={2} sm={2} xs={2} />
                <Grid item container md={10} sm={10} xs={10}>
                    <Grid item md={12}>
                        <Typography variant={"h3"}>You can also follow me on:
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md={2} sm={2} xs={2} />
                <Grid item container spacing={1} md={2} sm={2} xs={3} className={classes.follow}>
                    <Grid item md={4} sm={4} xs={4}>
                        {<img className={classes.behanceImg} src={BehanceLogo} />}
                    </Grid>
                    <Grid item md={4} sm={4} xs={4}>
                        {<img className={classes.scribbleImg} src={ScribbleLogo} />}
                    </Grid>
                </Grid>
            </Grid>








    )
}

export default FollowMe