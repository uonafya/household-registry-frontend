import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Header from '../components/navigation/HouseholdManagementHeader';
import Sidebar from '../components/navigation/Sidebar';
import MainContent from '../components/navigation/MainContent';
import HouseHoldAddress from '../components/forms/HouseHoldAddress';
import HouseHoldRegistration from './HouseHoldRegistration'
import AllHouseHolds from '../components/forms/AllHouseHolds';
import HouseholdMainPage from '../components/forms/HouseholdMainPage';
import CreateHouseholdMainPage from '../components/forms/CreateHouseholdMainPage';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Ministry of Health © '}
      <Link color="inherit" href="https://mui.com/">
        Household Registry
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

let theme = createTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#081627',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255,255,255,0.15)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#4fc3f7',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          marginRight: theme.spacing(2),
          '& svg': {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  },
};

const drawerWidth = 256;

export default function Mainpage() {
  // Define logic for navigating the components
  const [RenderedComponent, setRenderedComponent] = React.useState(null);

  const handleItemClick = (text) => {
    // Logic specific to each button
    if (text === 'Dashboard') {
      console.log('Dashboard button clicked');
      // Add your Dashboard button logic here
      // setRenderedComponent(<Home />);
    } else if (text === 'All Households') {
      console.log('Household button clicked');
      // Add your Households button logic here
      setRenderedComponent(<HouseholdMainPage onDrawerToggle={handleDrawerToggle}/>);
    }else if (text === 'Create Household') {
      console.log(' create Household button clicked');
      // Add your Households button logic here
      setRenderedComponent(<CreateHouseholdMainPage onDrawerToggle={handleDrawerToggle}/>);
    }
    else if (text === 'GIS') {
      console.log('GIS button clicked');
      // Add your Households button logic here
      setRenderedComponent(<AllHouseHolds />);
    }
    else if (text === 'Users') {
      console.log('Users button clicked');
      // Add your Users button logic here
      // setRenderedComponent(<HouseholdRegistrationStepper />);
    } else if (text === 'App settings') {
      console.log('App settings button clicked');
      // Add your Users button logic here
      // setRenderedComponent(<HouseholdRegistrationStepper />);
    } else if (text === 'Test Lab') {
      console.log('Test tab button clicked');
      // Add your Users button logic here
      // setRenderedComponent(<HouseholdRegistrationStepper />);
    } 
    else {
      setRenderedComponent(null);
    }
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Sidebar
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              handleClick={handleItemClick}
            />
          )}

          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
            handleClick={handleItemClick}
          />
        </Box>

        {RenderedComponent}
        
        {/* <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header onDrawerToggle={handleDrawerToggle} />
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
          {RenderedComponent}
          </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
             <Copyright /> 
          </Box>
        </Box> */}

        {/* */}

        {/* <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header onDrawerToggle={handleDrawerToggle} />
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
          {RenderedComponent}
          </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
             <Copyright /> 
          </Box>
        </Box> */}

      </Box>
    </ThemeProvider>
  );
}