import React from 'react';
import PropTypes from 'prop-types';
import ApplicationBar from './ApplicationBar/ApplicationBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppDrawer from './AppDrawer.js';
import { makeStyles } from '@material-ui/core/styles';
import Character from './Character/Character';
import bottomBorder from './img/bottom-border.png';
import theme from '../theme/MUITheme';
import { ThemeProvider } from '@material-ui/core/styles';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    'background-color': 'white',
    'border-left': '1px solid #ECE9E9',
    'border-right': '1px solid #ECE9E9',
    '&:after': {
      content:'""',
      display:'block',
      height: '28px',
      width: 'calc(100% + 40px)',
      'border-bottom':'28px solid transparent',
      'border-image':`url("${bottomBorder}") 28 stretch`,
      position: 'relative',
      top: '4px',
      margin: '0 -20px'
    },
    '@media print': {
      'border-left': 'none',
      'border-right': 0,
      'padding-left': 0,
      'padding-right': 0,
      '&:after': {
        display:'none'
      }
    },
    '@media (min-width:600px)': {
      'padding-left': '256px',
    },
    '@media (min-width:1024px)': {
      'padding-left': '256px',
      '&:after': {
        width: 'calc(100% + 52px)',
        margin: '0 -26px'
      }
    }
  }
}));

function App(props) {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <ApplicationBar position="fixed" handleDrawerToggle={handleDrawerToggle} />
        <AppDrawer container={container} mobileOpen={mobileOpen} handleToggle={handleDrawerToggle} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Character />
        </main>
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default App;
