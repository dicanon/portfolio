import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../assets/Vector 1 (1).svg'
import contact from '../assets/Group 1 (1).svg'
import linkedin from '../assets/linkedin (1).svg'
import twitter from '../assets/twittern icon (1).svg'
import fb from '../assets/fb icon (1).svg'
import {
    Typography,
    Grid, Hidden

} from '@material-ui/core'
import { Link, animateScroll as scroll } from "react-scroll";
import HomeScreen from './Home'

const useStyles = makeStyles(theme => ({
    root: {
        background: '#0B0B15',
        padding: '3%',
        alignContent: 'center'

    },
    logosvg: {
        width: '50%',
        // margin: "auto"

        [theme.breakpoints.down('sm')]: {
            width: '100%'

        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    logoRoot: {
        margin: '-18px',
        marginRight: '5px',
        [theme.breakpoints.down('sm')]: {
            width: '5px',
            marginLeft: '4px'
        },
        // [theme.breakpoints.down('xs')]: {
        //     marginRight: '0px',
        //     marginLeft: '0px',
        //     marginTop: '0px'
        // }

    },
    iconsvg: {
        width: '10%',
        margin: '2px',
        [theme.breakpoints.down('sm')]: {
            width: '8%',
            margin: '2px',
            justifyContent: 'space-around'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15%',
            margin: '2px',
        }
    },

    contactsvg: {
        width: '36%',
        margin: 'auto 2px',
        [theme.breakpoints.down('sm')]: {
            width: '36%',
            margin: 'auto 2px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '38%',
            margin: 'auto 2px',
        }
    },
        // iconRoot: {
        //     marginLeft: '0px',

        //     [theme.breakpoints.down('sm')]: {
        //         width: '0%'

        //     },
        //     [theme.breakpoints.down('xs')]: {
        //         // width: '58px',
        //         // justifyContent: 'space-between',
        //         marginLeft: '200px'
        //     }
        // }

    



}))


function Header() {
    const classes = useStyles()
    // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  
    // const ScrollDemo = () => {




    return (
        <Grid container className={classes.root} direction={'row'} alignItems="center" alignContents='center' justify={'space-around'}>
            <Grid item container md={2} sm={1} xs={1} justify="center" className={classes.logoRoot}>
                <img className={classes.logosvg} src={logo} >
                </img>
            </Grid>
            {/* <Grid item md={} sm={1} xs={1}/> */}
            <Hidden xsDown>
                <Grid item md={4} sm={4} xs={1} container justify={"space-around"} >
                    <Link activeClass="active" to="section-home" spy="true" smooth="true" duration="500">
                    <Grid item>
                        <Typography variant={"h4"} style={{ textAlign: "center" }}> HOME
                          </Typography>
                    </Grid>
                    </Link>
                    <Link activeClass="active" to="section-aboutme" spy="true" smooth="true" duration="500">
                    <Grid item>
                        <Typography variant={"h4"} style={{ textAlign: "center" }}>ABOUT ME</Typography>
                    </Grid>
                    </Link>
                    <Link activeClass="active" to="section-services" spy="true" smooth="true" duration="500">
                    <Grid item>
                        <Typography variant={"h4"} style={{ textAlign: "center" }}>SERVICES</Typography>
                    </Grid>
                    </Link>
                    <Link activeClass="active" to="section-projects" spy="true" smooth="true" duration="500">
                    <Grid item>
                        <Typography variant={"h4"} style={{ textAlign: "center" }}>PROJECTS</Typography>
                    </Grid>
                    </Link>
                </Grid>
            </Hidden>
            {/* <Grid item md={1} sm={1} xs/> */}
            <Grid item container md={5} sm={4} xs={4} className={classes.iconRoot} justify={'flex-end'}>
                {/* <Grid item md={1} sm={4} xs={4}> */}
                {<img className={classes.iconsvg} src={fb} />}
                {/* </Grid>
                <Grid item md={1} sm={4} xs={4}> */}
                {<img className={classes.iconsvg} src={twitter} />}
                {/* </Grid> */}
                {/* <Grid item md={1} sm={4} xs={4}> */}
                {<img className={classes.iconsvg} src={linkedin} />}
                {/* </Grid>
                <Grid item md={1} sm={4} xs={4}> */}
               {<img className={classes.contactsvg} src={contact} />}
                {/* </Grid> */}
            </Grid>
        </Grid>



    )
}

export default Header