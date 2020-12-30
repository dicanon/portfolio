import React from 'react'
import emailsvg from '../../assets/email 1.svg'
import callsvg from '../../assets/phone.svg'
import addresssvg from '../../assets/address 1.svg'
import {
    Typography,
    Grid,
    makeStyles, TextField, Button
} from '@material-ui/core'
import { CustomTextField } from './CustomTextField'
import ContactIcon from './ContactIcon'

const useStyles = makeStyles(theme => ({
    root: {
        margin: "5vh 0vw",
        width: '100%',

        [theme.breakpoints.down('sm')]: {
            margin: "5vh 0vw",
            width: '100%',

        },
        [theme.breakpoints.down('xs')]: {
            margin: "0vh 7vw",
            width: '100%',
            marginTop: '-10%'
        }


    },
    img: {
        width: '75%'
    },
    name: {
        width: '75%'



    }
}))


function ContactBar(props) {

    const classes = useStyles()
    const image = props.image
    const name = props.name
    const info = props.info


    const contact = [
        {
            'image': emailsvg,
            'name': 'Mail',
            'info': 'diannecanon1993@gmail.com'
        },
        {
            'image': callsvg,
            'name': 'Phone',
            'info': '+639279631033'
        },
        {
            'image': addresssvg,
            'name': 'Address',
            'info': 'North Fairview, Quezon City'
        }

    ]


    return (
        <Grid item container direction="column" className={classes.root}>
            <Grid item md={1} sm={1} xs={1} />
            {contact.map(s => (
                <ContactIcon image={s.image} name={s.name} info={s.info} />
            ))}
        </Grid>








    )
}
export default ContactBar