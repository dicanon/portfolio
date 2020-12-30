import './index.css'

import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from './Resources'


const theme = createMuiTheme({
    palette : {
        primary : {
            main : colors["pink"]
        },
        secondary : {
            main : colors["light-violet"]
        },
        common : {
            background : colors["background"],
            dark_violet : colors['dark-violet'],
            pale_violet : colors['pale-violet'],
            pink : colors['pink'],
            aquatic_blue : colors['aquatic-blue'],
            dark_blue : colors['dark-blue'],
            violet_gray : colors["violet-gray"],
            white : colors["white"]
        },
        text : {
            primary : colors["white"]
        }
    },

    typography: {
        fontFamily: [
            "Ropa Sans",
            "Montserrat"
        ].join(','),

    }, 
    overrides: {
        MuiButton: {
            root: {
                backgroundColor: colors['dark-violet']
            }
        }
    }
})

theme.typography.h1 = {
    fontFamily : "Ropa Sans",
    fontSize : "3rem",
    lineHeight : "3.216rem",
    color : colors["white"],
    fontWeight : 400,

    [theme.breakpoints.down('md')] : {
        fontSize : "2.25rem",
        lineHeight : "2.412rem"
    },
    [theme.breakpoints.down('xs')] : {
        fontSize : "1.5rem",
        lineHeight : "1.608rem"
    }
}


theme.typography.h2 = {
    fontFamily : "Ropa Sans",
    fontSize : "2.25rem",
    lineHeight : "2.412rem",
    color : colors["white"],
    fontWeight : 400,

    [theme.breakpoints.down('md')] : {
        fontSize : "1.875rem",
        lineHeight : "2.01rem"
    },
    [theme.breakpoints.down('sm')] : {
        fontSize : "1.125rem",
        lineHeight : "1.206rem"
    }
}

theme.typography.h3 = {
    fontFamily : "Ropa Sans",
    fontSize : "1.5rem",
    lineHeight : "1.608rem",
    color : colors["white"],
    fontWeight : 400,

    [theme.breakpoints.down('md')] : {
        fontSize : "1.125rem",
        lineHeight : "1.206rem"
    },
    [theme.breakpoints.down('sm')] : {
        fontSize : "0.875rem",
        lineHeight : "0.938rem"
    }
}

theme.typography.h4 = {
    fontFamily : "Ropa Sans",
    fontSize : "1.125rem",
    lineHeight : "1.206rem",
    color : colors["white"],
    fontWeight : 400,

    [theme.breakpoints.down('md')] : {
        fontSize : "0.875rem",
        lineHeight : "0.938rem"
    },
    [theme.breakpoints.down('sm')] : {
        fontSize : "0.75rem",
        lineHeight : "0.804rem"
    }
}

theme.typography.body1 = {
    fontFamily : "Montserrat",
    fontSize : "1rem",
    lineHeight : "1.25rem",
    color : colors["white"],

    [theme.breakpoints.down('md')] : {
        fontSize : "1rem",
        lineHeight : "1.25rem"
    },
    [theme.breakpoints.down('sm')] : {
        fontSize : "0.875rem",
        lineHeight : "0.875rem"
    },
    [theme.breakpoints.down('xs')] : {
        fontSize : "0.625rem",
        lineHeight : "0.875rem"
    },
}

export default theme;



