import React from 'react'
import design from '../../assets/edit.svg'
import {
    Typography,
    Grid,
    makeStyles
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        margin: "1.5vh auto",
        width: "80%"

    },
    designImg: {
        width: '50%',
        margin: "auto",
        display: "block",
        padding: '37px',

        [theme.breakpoints.down('sm')]: {
            width: '20%'

        },
        [theme.breakpoints.down('xs')]: {
           width: '45%'}

        },

        designTypo: {
            textAlign: "center"


        },
        body2Typo: {
            marginLeft: "7%",
            marginRight: "7%",
            marginTop: "10%"

        },
        body: {
            height: '100vh',
            margin: 0,
            display: 'grid',
            placeItems: 'center',
            background: '#222',
            width: '82%',
        },
        moduleBorderWrap: {
            padding: '1rem',
            position: 'relative',
            background: 'Linear Gradient #383131 @ 0% rgba(180, 166, 166, 0) @ 85.94%',
            padding: '3px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
            borderRadius: '13px',

        },
        module: {
            background: theme.palette.common.dark_blue,
            color: 'white',
            padding: '-7rem',
            height: '420px',

        }
    }
))


function ServiceBox(props) {

    const classes = useStyles()


    const image = props.image
    const title = props.title
    const body = props.body


    return (
        <div className={classes.root}>
            <div className={classes.moduleBorderWrap} >
                <div className={classes.module} >
                    <img className={classes.designImg} src={image} />
                    <Typography className={classes.designTypo} variant={"h3"}>{title}
                    </Typography>
                    <Typography className={classes.body2Typo} variant={"body2"}>{body}
                    </Typography>
                </div>
            </div>
        </div>






    )
}

export default ServiceBox