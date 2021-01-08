import robotSVG from '../assets/Hi_Robot.svg'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Grid, Hidden, Box,
    useMediaQuery
} from '@material-ui/core'
import mailSVG from '../assets/sendmail.svg'
import downloadSV from '../assets/dl sv.svg'
import theme from '../Theme'
const useStyles = makeStyles(theme => ({
    root: {
        margin: "10vh 0px"
    },

    mailImg: {
        width: '100%',
        display: "block",
        margin: "auto",
        float: "right",
        [theme.breakpoints.up('md')]:{
            maxWidth: '3.125rem'
        },
        [theme.breakpoints.down('xs')]: {
            width: '50%'
        }
    },
    // mailImg: {
    //     width: '55%',
    //     marginLeft: '15px',
    //     marginTop: '-2px',
    //     [theme.breakpoints.down('sm')]: {
    //         // width: '30%',
    //         // marginLeft: '38px',
    //         // marginTop: '-2px',

    //     },
    //     [theme.breakpoints.down('xs')]: {
    //         width: '40%',
    //         marginLeft: '20px',
    //         marginTop: '-2px',
    //     }


    // },

    mailRoot: {
        margin: "2vh 0px"

    },

    downloadImg: {
        width: '100%',
        display: "block",
        margin: "1vh 0vw",
        [theme.breakpoints.up('md')]:{
            maxWidth: '12.5rem'
        },


    },

    robotImg: {
        width: '85%',
        marginLeft: '13%',
        margin: '10px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '18%',
            margin: '5px',

        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '23%',
            margin: '3px',
        }
    },
    justifyText: {
        textAlign: 'justify',
        display: 'inline-block',
        width: '100%',
        margin: '20px',
        [theme.breakpoints.down('sm')]: {
            margin: 'px',
            display: 'flex',
            justifyContent: 'center'

        },
        [theme.breakpoints.down('xs')]: {
            // margin: '11px',
            display: 'flex',
            justifyContent: 'center',
            margin: '0px',
        }
    },
    leftText: {
        textAlign: 'right',
        margin: '10px',
        [theme.breakpoints.down('sm')]: {
            margin: 'px',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',

        },
        [theme.breakpoints.down('xs')]: {
            // margin: '11px',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
        }


    },
    containerRoot: {
        margin: '0px',
        [theme.breakpoints.down('sm')]: {
            margin: 'px'

        },
        [theme.breakpoints.down('xs')]: {
            margin: '2px',
            display: 'flex',
            justifyContent: 'center'

        }
    },
    hello: {
        // backgroundColor: 'red',
        background: 'linear-gradient(180deg, rgba(33, 104, 253, 0.9) 0%, rgba(255, 255, 255, 0) 100%), rgba(169, 37, 234, 0.27)',
        // border: '1px solid #000000',
        boxSizing: 'border-box',
        zIndex: -1,
        width: 'fit-content',
        float: 'right',
        marginLeft: 15,
        padding: '5px',
        borderRadius: '0.5rem',
        // marginRight: 15,

        [theme.breakpoints.down('sm')]: {
            margin: '10px',
            marginLeft: '10px',
            float: "none",
            padding: '5px',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '6px',
            zIndex: -1,
            marginRight: '7px',
            marginLeft: '7px',

        }
    },
    lineBar: {
        // position: 'absolute',
        height: '0px',
        justifyContent: 'center',
        alignContent: 'center',
        // left: '634px',
        // top: '290px',
        // opacity: '0.5',
        border: '1px solid #B08AD2',
        // color: '#FFFFFF',
        // fontSize: '1.5rem',
        // fontFamily: 'Ropa Sans',
        // fontWeight: '400',
        // lineHeight: '15rem',
        [theme.breakpoints.down('sm')]: {
            // width: "98%",
            height: '0px',
            justifyContent: 'center',
            alignContent: 'center',
            border: '1px solid #B08AD2'
        },
        [theme.breakpoints.down('xs')]: {
            // width: "65%",
            height: '0px',
            justifyContent: 'center',
            alignContent: 'center',
            border: '1px solid #B08AD2'
        }
    },

}))

function HomeScreen() {

    const classes = useStyles()
    const matchesLg = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Grid className={classes.root} container direction={"row"}>
            <Box clone order={{ xs: 2, sm: 2, md: 1, lg: 1 }}>
                <Grid item md={2} sm={2} xs={1} />
            </Box>

            <Box clone order={{ xs: 3, sm: 3, md: 2, lg: 2 }}>
                <Grid item container md={5} sm={10} xs={10} className={classes.containerRoot}>
                    <Grid item container md={9} sm={9} xs={10}
                        direction="row"
                        alignItems="center"
                        alignContent="center">
                        <Grid item xs sm md>
                            <div className={classes.lineBar} />
                        </Grid>
                        <Grid item>
                            <div className={classes.hello} >
                                <Typography variant={"h2"}>
                                    HELLO I'M DIANNE
                           </Typography>
                            </div>
                        </Grid>
                        <Hidden mdUp>
                            <Grid item xs sm md>
                                <div className={classes.lineBar} />
                            </Grid>
                        </Hidden>
                    </Grid>
                    <Grid item md={9} sm={9} xs={10} className={classes.leftText}>
                        <Typography variant={"h1"}>
                            A full stack web developer.
                        </Typography>
                    </Grid>
                    <Grid item md={9} sm={9} xs={10} >
                        <Typography variant={"body1"} className={classes.justifyText}>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
                        </Typography>
                    </Grid>
                    <Grid item md={9} sm={9} xs={10}></Grid>
                    <Grid item container md={9} sm={9} xs={10} lg={9} 
                        className={classes.mailRoot}
                        direction="column"
                        alignContent={matchesLg ? "flex-end" : "center"} 
                        alignItems={matchesLg ? "flex-end" : "center"} 
                        justify="center">
                        {/* <Grid item md={0} sm={2} xs={0} /> */}
                        <Grid item container sm={6} md={12} lg xl={6}
                            direction="row"
                            alignItems="center"
                            justify={matchesLg? "flex-end" : "center"}
                            spacing={1}>
                        
                                <Grid item lg md sm={2} xs={2} >
                                    <img className={classes.mailImg} src={mailSVG} />
                                </Grid>
                                <Grid item lg md sm xs>
                                    <Typography variant={"h3"}>
                                        diannecanon1993@gmail.com
                                </Typography>
                                </Grid>
                        </Grid>

                        <Grid item lg md={12} sm={4} xs={4}>
                            <img  className={classes.downloadImg} src={downloadSV} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Hidden mdUp>
                <Box clone order={{ md: 3, lg: 3 }}>
                    <Grid item md={1} sm={2} xs={1} />
                </Box>
            </Hidden>

            <Box clone order={{ xs: 1, sm: 1, md: 5, lg: 5 }}>
                <Grid item container
                    justify={"center"}
                    alignItems={"center"}
                
                    sm={12} xs={12} md={3}>

                    <Grid item md={12} sm={4} xs={4}>
                        <img className={classes.robotImg} src={robotSVG} />
                    </Grid>

                </Grid>
            </Box>

            <Box clone order={{ xs: 4, sm: 4, md: 5, lg: 5 }}>
                <Grid item md={1} sm={1} xs={1} />
            </Box>
        </Grid>

    )
}



export default HomeScreen