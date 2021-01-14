import React, { useState, useEffect } from 'react';
import Box from './Slideshow'
// import Box from './index';
import { makeStyles } from '@material-ui/core/styles'
import {
    Button,
    Grid, Hidden, Slide, Grow, Fade, Collapse
} from '@material-ui/core'
import project from '../../assets/project.jpg'
import GirlWheel from '../../assets/Girl_wheel.svg'
import logo from '../../assets/Vector 1 (1).svg'

const useStyles = makeStyles(theme => ({

    root: {
        marginTop: '15%',
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
    },

    currentSlide: {
        height: '300px',
        width: '400px',
        margin: 'auto 10px',

    },

    prevNextSlide: {
        width: '200px',
        height: '150px',

    },
    slideHolder: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',

    },
    slideThumbnail: {
        width: '100%',
        height: '100%',
        background: theme.palette.common.dark_violet,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '6px',
        backgroundShadow: '5px 5px 6px #551d829c'

    },
    slideController: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    groupDot: {
        // marginLeft: '45%',
        marginTop: '5%',
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"


    },
    dot: {
        margin: '2px',
        height: '6px',
        width: '6px',
        borderRadius: '50%',
        border: '1px solid gray',
        display: 'inline-block',
        padding: '3px',


        "&:hover": {
            backgroundColor: theme.palette.common.dark_violet,
            border: `1px solid ${theme.palette.common.dark_violet}`,
            transform: "scale(1.2)"
        }
    },

    dotSelected: {
        height: "12px",
        width: "12px",
        backgroundColor: theme.palette.common.dark_violet,
        border: `1px solid ${theme.palette.common.dark_violet}`
    }





}))



export default function ProjectSlide() {
    const classes = useStyles()
    const interval = 3000
    const images = [
        project,
        GirlWheel,
        logo,
        project,
        GirlWheel,
        logo,
    ]

    const [thumbnails, setThumbnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});
    const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    const [slideIn, setSlideIn] = useState(true)

    useEffect(() => {
        // setThumbnails(images);
        setCurrentSlideStyle({
            backgroundImage: `url(${images[currentSlide]}`,
            transition: 'opacity 1000ms, transform 1000ms'
        });

        if (currentSlide > 0) {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[currentSlide - 1] + "')",
                transition: 'opacity 1000ms, transform 1000ms'

            });
        } else {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[images.length - 1] + "')",
                transition: 'opacity 1000ms, transform 1000ms'

            });
        }

        if (currentSlide === images.length - 1) {
            setNextSlideStyle({
                backgroundImage: "url('" + images[0] + "')",
                transition: 'opacity 1000ms, transform 1000ms'

            });
        } else {
            setNextSlideStyle({
                backgroundImage: "url('" + images[currentSlide + 1] + "')",
                transition: 'opacity 1000ms, transform 1000ms'

            });
        }

        // const loop = setInterval (()=>{
        //     if(currentSlide ===images.length-1){
        //         setCurrentSlide(0);
        //     }else{
        //         setCurrentSlide(currentSlide+1);
        //     }
        // }, interval);
        // return () => clearInterval(loop);
    }, [currentSlide]);


    function dotClickHandler(idx) {
        setSlideIn(false)
        setTimeout(() => {
            setCurrentSlide(idx)
            setSlideIn(true)

        }, 400)

    }

    return (
        <div className={classes.root} justify={"center"} >
            <div className={classes.slideHolder}>
                <section className={classes.prevNextSlide}>
                    {/* <Grow in={slideIn}> */}
                    <div style={previousSlideStyle} className={classes.slideThumbnail}></div>
                    {/* </Grow> */}
                </section>
                <section className={classes.currentSlide}>
                    <Slide in={slideIn} direction="down" mountOnEnter>
                        <div style={currentSlideStyle} className={classes.slideThumbnail}></div>
                    </Slide>
                </section>
                <section className={classes.prevNextSlide}>
                    {/* <Grow in={slideIn}> */}
                    <div style={nextSlideStyle} className={classes.slideThumbnail}></div>

                    {/* </Grow> */}
                </section>
            </div>
            <div className={classes.groupDot} style={{cursor: "pointer"}}>
                {images.map((i, idx) => (
                    <span className={
                        currentSlide === idx ? [classes.dot, classes.dotSelected].join(" ") :
                            classes.dot}
                        onClick={() => dotClickHandler(idx)} />
                ))}

            </div>
        </div>
    )
}