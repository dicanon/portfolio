import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/Vector 1 (1).svg";
import contact from "../assets/Group 1 (1).svg";
import linkedin from "../assets/linkedin (1).svg";
import twitter from "../assets/twittern icon (1).svg";
import fb from "../assets/fb icon (1).svg";
import { Typography, Grid, Hidden, useMediaQuery } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
import HomeScreen from "./Home";
import theme from '../Theme'
import index from '.././index'
import AnimatedCursor from "react-animated-cursor"

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0B0B15",
    padding: "3%",
    alignContent: "center",
    curson: 'pointer'
  },
  logosvg: {
    width: "50%",
    // margin: "auto"

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  logoRoot: {
    // margin: "-18px",
    marginRight: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "5px",
      marginLeft: "0px",
    },
    // [theme.breakpoints.down('xs')]: {
    //     marginRight: '0px',
    //     marginLeft: '0px',
    //     marginTop: '0px'
    // }
  },
  iconsvg: {
    width: "80%",
    margin: "0px",
    minWidth: '20%',
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      margin: "1px",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "0px",
      justifyContent: "space-around",
    }
    },
 

    


  contactsvg: {
    width: "170%",
    margin: "2vh 0vw",
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {
      width: "150%",
      margin: "auto 0vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "220%",
      margin: "0vh 0px",
    },
    

  }
  
}));

function Header() {
  const classes = useStyles();
  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  // const ScrollDemo = () => {
    const matchesDown = useMediaQuery(theme.breakpoints.up('sm'))
    const [state,setState]=useState(false);
  let url="";


  return (
    <Grid
      container
      className={classes.root}
      direction={"row"}
      alignItems="center"
      alignContents="center"
      justify={"space-around"}
    >
      <Grid
        item
        container
        md={2}
        sm={1}
        xs={1}
        justify="center"
        className={classes.logoRoot} >
      
        <img className={classes.logosvg} src={logo}></img>
      </Grid>
      {/* <Grid item md={} sm={1} xs={1}/> */}
      <Hidden xsDown>
        <Grid item md={4} sm={4} xs={1} container justify={"space-around"} style={{cursor: "pointer"}} >
          <Link
            activeClass="active"
            to="section-home"
            spy="true"
            smooth="true"
            duration="500"
          >
            <Grid item>
            <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
              <Typography variant={"h4"} style={{ textAlign: "center" }} style={{cursor: "pointer"}}>
                {" "}
                HOME
              </Typography>
            </Grid>
          </Link>
          <Link
            activeClass="active"
            to="section-aboutme"
            spy="true"
            smooth="true"
            duration="500"
          >
            <Grid item >

              <Typography variant={"h4"} style={{ textAlign: "center" }} style={{cursor: "pointer"}}>
                ABOUT ME
              </Typography>
            </Grid>
          </Link>
          <Link
            activeClass="active"
            to="section-services"
            spy="true"
            smooth="true"
            duration="500"
          >
            <Grid item>
              <Typography variant={"h4"} style={{ textAlign: "center" }} style={{cursor: "pointer"}}>
                SERVICES
              </Typography>
            </Grid>
          </Link>
          <Link
            activeClass="active"
            to="section-projects"
            spy="true"
            smooth="true"
            duration="500"
          >
            <Grid item>
              <Typography variant={"h4"} style={{ textAlign: "center" }} style={{cursor: "pointer"}}>
                PROJECTS
              </Typography>
            </Grid>
          </Link>
        </Grid>
      </Hidden>

      <Grid
        item
        container
        md={5}
        sm={6}
        xs={10}
        className={classes.iconRoot}
        justify={"flex-end"}
        alignItems={"center"}
      spacing={0.8}>
      
        <Grid item md={1} sm={1} xs={1}>
        <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
        <a href="https://wwww.facebook.com/dianne.modanza" >
          <img className={classes.iconsvg} src={fb} style={{cursor: "pointer"}} />
          </a>
        </Grid>
        <Grid item md={1} sm={1} xs={1}>
        <a href="https://twitter.com/dcanon2">
          <img className={classes.iconsvg} src={twitter} style={{cursor: "pointer"}}/>
          </a>
        </Grid>
        <Grid item md={1} sm={1} xs={1}>
        <Link
            activeClass="active"
            to="section-services"
            spy="true"
            smooth="true"
            duration="500"
          >
          <img className={classes.iconsvg} src={linkedin} style={{cursor: "pointer"}} />
          </Link>
        </Grid>
        <Grid item md={1} sm={1} xs={1}>
        <Link
            activeClass="active"
            to="section-contact"
            spy="true"
            smooth="true"
            duration="500"
          >
          <img className={classes.contactsvg} src={contact} style={{cursor: "pointer"}} />
          </Link>
          </Grid>
        
          <Grid item md={1} sm={1} xs={1}/>
        
      </Grid>
    </Grid>
  );
}

export default Header;
