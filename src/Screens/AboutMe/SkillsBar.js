import React from 'react'
import CODEsvg from '../../assets/code 1.svg'
import {
    Typography,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        margin: "1.5vh 0vw"
    },
    barContainer: {
        position: "relative"
    },
    lineBar: {
        height: "0.125rem",
        width: "95%",
        backgroundColor: "white",
        position: "absolute",
        top: "calc(0.625rem - (0.125rem/2))",
        left: "5%",
        zIndex: -1,
        [theme.breakpoints.down('sm')]:{
            top: "calc(0.375rem - (0.125rem/2))",
        },
        [theme.breakpoints.down('xs')]:{
            top: "calc(0.25rem - (0.125rem/2))",
        }
    },
    lineValue: {
        background: theme.palette.secondary.main,
        boxSizing: "border-box",
        borderRadius: "3rem",
        height: "1.25rem",
        
        [theme.breakpoints.down('sm')]:{
            height: "0.75rem"
        },
        [theme.breakpoints.down('xs')]:{
            height: "0.5rem"
        }
    }
}))
function SkillsBar(props) {

    const classes = useStyles()
    const skillName = props.skillName
    const skillPct = props.pct

    return (
        <div className={classes.root}>
            <Typography variant={"h3"}>{skillName}</Typography>
            <div className={classes.barContainer}>
                <div className={classes.lineBar} />
                <div className={classes.lineValue}
                    style={{
                        width : skillPct
                    }}/>
            </div>
        </div>

    )
}

export default SkillsBar