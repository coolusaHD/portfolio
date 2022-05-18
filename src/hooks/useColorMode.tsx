import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

// Themes
import { mainThemeLight, mainThemeDark } from '../assets/styles/theme';
import { PaletteMode } from '@mui/material';

interface ColorModeContextProps {
  toggleColorMode: () => void;
  mode: PaletteMode;
  theme: any;
}

// ColorModeContext
const colorModeContext = React.createContext<ColorModeContextProps>({
  toggleColorMode: () => {},
  mode: 'dark',
  theme: {},
});

/**
 *
 * ColorModeProvider for colorMode change
 *
 * @param {React.PropsWithChildren<{}>} children
 * @return {React.ReactElement}
 */
export function ColorModeProvider({ children }: React.PropsWithChildren<{}>): React.ReactElement {
  const colorMode = useProvideColorMode();

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={colorMode.theme}>{children}</ThemeProvider>
    </colorModeContext.Provider>
  );
}

export const useColorMode = () => {
  return React.useContext(colorModeContext);
};

/**
 * useProvideColorMode provides the colorModeContext as hook
 *
 * @return {ColorModeContextProps}
 */
function useProvideColorMode(): ColorModeContextProps {
  // theme state
  const [mode, setMode] = React.useState<PaletteMode>('dark');

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode: PaletteMode) => {
      return prevMode === 'light' ? 'dark' : 'light';
    });
  }, []);

  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark' ? mainThemeDark : mainThemeLight),
        },
      }),
    [mode]
  );

  // make theme responsive
  theme = responsiveFontSizes(theme);

  return {
    toggleColorMode,
    mode,
    theme,
  };
}
