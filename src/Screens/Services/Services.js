import React from 'react'
import design from '../../assets/edit.svg'
import development from '../../assets/idea.svg'
import deployment from '../../assets/navigation.svg'
import {
    Typography,
    Grid,
    makeStyles,
    Hidden
} from '@material-ui/core'
import ServiceBox from './ServiceBox'


const useStyles = makeStyles(theme => ({
    root: {
        margin: "1.5vh 0vw"

    },
    designImg: {
        width: '50%',
        margin: "auto",
        display: "block",
        padding: '37px'

    },
    developmentImg: {
        width: '50%',
        margin: "auto",
        display: "block",
        padding: '37px'

    },
    deploymentImg: {
        width: '50%',
        margin: "auto",
        display: "block",
        padding: '37px'

    },
    designTypo: {
        margin: "auto",
        display: "block",


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
    },
    moduleBorderWrap: {
        padding: '0px',
        position: 'relative',
        background: 'Linear Gradient #383131 @ 0% rgba(180, 166, 166, 0) @ 85.94%',
        padding: '3px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        borderRadius: '13px',

    },
    module: {
        background: theme.palette.common.dark_blue,
        color: 'white',
        padding: '-10rem',
        width: '82%',

    }
}
))


function Services() {

    const classes = useStyles()

    const services= [
        {
            'image': design,
            'title': "Design",
            'body': "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem."
        },
        {
            'image': development,
            'title': "Development",
            'body': "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem."
        },
        {
            'image': deployment,
            'title': "Deployment",
            'body': "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem."
        },

]

    return (
        <Grid item container justify="center">
            <Hidden xsDown>
            <Grid item md={2} sm={1} xs={2} />
            </Hidden>
            { services.map(s => (
                    <Grid item md={3} sm={3} xs={10}>
                        <ServiceBox image={s.image} title={s.title} body={s.body} />
                    </Grid>
                    ))}

            <Hidden xsDown>
            <Grid item md={1} sm={1} xs={2} />
            </Hidden>
        </Grid>




    )
}

export default Services