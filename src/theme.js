import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    /*palette: {
        primary: {
            main: "#0B0C10"
        },
        secondary:
        {
            main: "#66FCF1"
        }
    },
    typography: {
        
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontFamily": 'Titillium Web',
        
    },*/
    textColor: {
        default: "#C5C6C7"
    },

    black: "#0B0C10",
    light_black: "#1F2833",
    grey: "#C5C6C7",
    blue_marine: "#66FCF1",
    dark_blue:"#45A29E"
    

    /**
    background: {
        default: "#C5C6C7"
    }**/
})

export default theme;