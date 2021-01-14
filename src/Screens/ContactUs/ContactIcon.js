import React from 'react'

import {
    Typography,
    Grid,
    makeStyles
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        margin: "30px 0vw",

        [theme.breakpoints.down('sm')]: {
            margin: "7vh 0vw",

        },
        [theme.breakpoints.down('xs')]: {
            margin: "2vh 0vw",
            marginLeft:'2%'
        }

    },
    img: {
        width: '93%',
        margin: '0%',
        marginLeft: '-7%'

    },
    name: {
        width: '100%',


    }
}))


function ContactIcon(props) {

    const classes = useStyles()
    const image = props.image
    const name = props.name
    const info = props.info



    return (
        <Grid item container direction={'row'} className={classes.root}>
            <Grid item md={1} sm={1} xs={1} >
                <img className={classes.img} src={image} />
            </Grid>
            <Grid item md={10} sm={10} xs={10} >
                <Typography className={classes.name} variant={"h3"}>{name}
                </Typography>
                <Grid item md={10} sm={12} xs={12} >
                    <Typography className={classes.name} variant={"h4"}>{info}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

    )
}



export default ContactIcon