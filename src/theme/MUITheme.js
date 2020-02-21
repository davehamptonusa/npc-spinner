import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';


const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#822000',
        },
        secondary: amber,
    },
},
);

export default theme;