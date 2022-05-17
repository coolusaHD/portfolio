import * as React from 'react';
import './App.css';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import MainLayout from './components/layout';
import CssBaseline from '@mui/material/CssBaseline';
// import roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PaletteMode } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

/**
 * App main component
 *
 * @return {React.ReactElement}
 */
export default function App(): React.ReactElement {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                  main: '#319da0',
                },
                secondary: {
                  main: '#c11e67',
                },
                background: {
                  default: '#fafafa',
                  toolbar: 'rgba(255, 255, 255, 0.1)',
                  mobileDrawerMenu: 'rgba(255, 255, 255, 0.7)',
                },
                text: {
                  main: '#000000',
                  coloredSection: '#fafafa',
                },
              }
            : {
                // palette values for dark mode{
                primary: {
                  main: '#319da0',
                },
                secondary: {
                  main: '#c11e67',
                },
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
    [mode]
  );

  // make theme responsive
  theme = responsiveFontSizes(theme);

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout changeColorMode={colorMode.toggleColorMode} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}
