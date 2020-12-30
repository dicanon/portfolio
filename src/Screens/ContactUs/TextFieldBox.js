import React from 'react'
import {
    Typography,
    Grid,
    makeStyles, TextField, Button
} from '@material-ui/core'
import { CustomTextField } from './CustomTextField'


const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        margin: '2vh 0vw'

    },
    body: {
        height: '100vh',
        margin: 0,
        display: 'grid',
        placeItems: 'center',
        background: 'linear-gradient(180deg, rgba(86, 11, 70, 0.2) 0%, rgba(86, 11, 70, 0) 100%)',
        transform: 'matrix(1, -0.01, 0, 1, 0, 0)',
        width: '82%',

    },
    module: {
        background: 'linear-gradient(180deg, rgba(86, 11, 70, 0.2) 0%, rgba(86, 11, 70, 0) 100%)',
        color: 'white',
        padding: '10%;',
        height: '390px',

    },
    textfield: {
        backgroundColor: 'gray',
        margin: '5%',

    },
    button: {
        float: 'right',
        marginTop: '5%'


    }
}
))


function TextFieldBox(props) {

    const classes = useStyles()


    return (
        <div className={classes.root} noValidate autoComplete="off">
            <div className={classes.moduleBorderWrap} >
                <div className={classes.module} >
                    <form textfield id="standard-secondary" label="Standard secondary" color="secondary" >
                        <CustomTextField
                            id="Name"
                            label="Name"
                            variant="filled"
                            color="primary"
                            size="small"
                            style={{
                                width: '45%',
                                marginRight: '10%'
                            }} />

                        <CustomTextField
                            id="Email Address"
                            label="Email Address"
                            variant="filled"
                            color="primary"
                            size="small"
                            style={{
                                width: '45%',

                            }} />

                        <CustomTextField
                            id="Subject"
                            label="Subject"
                            variant="filled"
                            color="primary"
                            size="small"
                            style={{
                                width: '100%',
                                marginTop: '35px'

                            }} />

                        <CustomTextField
                            id="Message"
                            label="Your message"
                            variant="filled"
                            color="primary"
                            size="small"
                            multiline
                            rows={5}
                            style={{
                                width: '100%',
                                marginTop: '35px'

                            }} />
                    </form>


                    <Button className={classes.button}>Send a Message</Button>

                </div>
            </div>
        </div >








    )
}

export default TextFieldBox