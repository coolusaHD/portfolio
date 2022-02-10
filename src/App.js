import * as React from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, useTheme, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { amber, deepOrange, grey, indigo } from '@mui/material/colors';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MainLayout from './components/layout';
import CssBaseline from "@mui/material/CssBaseline";
//import roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button } from "@mui/material";



const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



function App() {
    const [mode, setMode] = React.useState('dark');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    let theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
            ...(mode === 'light'
              ? {
                  // palette values for light mode
                  primary:{
                    main:  '#319da0',
                  },
                  secondary:{
                    main: '#c11e67',
                  } ,
                  background: {
                    default: '#fafafa',
                    toolbar: 'rgba(255, 255, 255, 0.1)',
                  },
                  text: {
                    main: '#000',
                    coloredSection: '#fafafa',
                  },
                }
              : {
                  // palette values for dark mode{
                  primary: {
                    main: '#319da0',
                  },
                  secondary:{
                    main: '#c11e67',
                  } ,
                  background: {
                    default: '#071824',
                    toolbar: 'transparent',
                  },
                  text: {
                    main: '#fafafa',
                    coloredSection: '#fafafa',
                  },
                }),
          },
        }),
      [mode],
    );

// make theme responsive
  theme = responsiveFontSizes(theme);


  return (
    <div className="App">
      <BrowserRouter>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
              <MainLayout changeColorMode={colorMode.toggleColorMode} />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
