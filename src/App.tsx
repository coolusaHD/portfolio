import * as React from 'react';
import './App.css';
import MainLayout from './components/layout';
import CssBaseline from '@mui/material/CssBaseline';

// init AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

// import roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ColorModeProvider } from './hooks/useColorMode';

/**
 * App main component
 *
 * @return {React.ReactElement}
 */
export default function App(): React.ReactElement {
  return (
    <div className="App">
      <ColorModeProvider>
        <CssBaseline />
        <MainLayout />
      </ColorModeProvider>
    </div>
  );
}
