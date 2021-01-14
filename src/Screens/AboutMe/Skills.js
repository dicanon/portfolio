import React from 'react'
import CODEsvg from '../../assets/code 1.svg'
import {
    Typography,
    Grid, makeStyles
} from '@material-ui/core'
import SkillsBar from './SkillsBar'

const useStyles = makeStyles(theme => ({
    root: {
        margin: "10vh 0vw",

        [theme.breakpoints.down('sm')]: {
            margin: "5vh 0vw"

        },
        [theme.breakpoints.down('xs')]: {
            margin: "0vh 0vw"
        }

    },

    CODEImg: {
        width: '100%'
    },
    skillsBarContainer: {
        width: '100%',
        height: '100%',
        minHeight: "10vh",
        [theme.breakpoints.down('sm')]: {
            width: "66%",
            margin: "auto"
        }
    }
}))
function Skills() {

        const classes = useStyles()

        const skills = [
            {
                'name': "React JS",
                'pct': "85%"
            },
            {
                'name': "Javascript",
                'pct': "85%"
            },
            {
                'name': "CSS/SCSS",
                'pct': "85%"
            },
            {
                'name': "GitHub",
                'pct': "85%"
            },
            {
                'name': "HTML",
                'pct': "85%"
            },
            {
                'name': "MySQL",
                'pct': "85%"
            },

        ]
        return (
            <Grid item container className={classes.root} alignItems='center'>
                <Grid item xl={2} md={2} sm={4} xs={4} />
                <Grid item xl={2} md={3} sm={4} xs={4}>
                    <img className={classes.CODEImg} src={CODEsvg} />
                </Grid>
                <Grid item  md={1} sm={4} xs={4} />
                <Grid item xl={5} md={5} sm={12} xs={12}>
                    <div className={classes.skillsBarContainer}>
                        {skills.map(sk => (
                            <SkillsBar skillName={sk.name} pct={sk.pct} />
                        ))}
                    </div>
                </Grid>

            </Grid>

        )
    }

export default Skills