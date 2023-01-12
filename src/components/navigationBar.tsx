import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';
import { useTranslation } from 'react-i18next';
import { useColorMode } from '../hooks/useColorMode';
import { useScrollRefs } from '../hooks/useScrollRefs';
import { customTheme } from '../types/global';
import { LanguagesSwitch } from './languages';
import { MenuNavItem, MenuNavItemBold } from './style/navigationBarStyle';

import PaLogo from '../assets/images/pa_logo.svg';

/**
 * Render NavigationBar component
 *
 * @param {NavigationBarProps} props
 * @return {React.ReactElement}
 */
export default function NavigationBar(): React.ReactElement {
  const [drawerStatus, setDrawer] = React.useState(false);
  const { toggleColorMode } = useColorMode();
  const theme: customTheme = useTheme();

  const { t } = useTranslation();

  const { scrollTo, HomeRef, AboutMeRef, SourceRef, ProjectsRef } = useScrollRefs();

  const scrollWithCloseDrawer = async (ref: React.RefObject<HTMLElement>) => {
    await setDrawer(false);
    await scrollTo(ref);
  };

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar disableGutters sx={{ backdropFilter: 'blur(10px)', backgroundColor: theme.palette.background.toolbar }}>
        <Grid container spacing={1} sx={{ justifyContent: { xs: 'flex-start', md: 'center' } }}>
          {/* Spacer */}
          <Grid item xs={1} sm={2} />

          {/* Middle Section */}
          <Grid item xs={4} sm={8}>
            {/* Desktop */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, py: 1, justifyContent: 'space-around', alignItems: 'center' }}>
              <MenuNavItemBold onClick={() => scrollTo(HomeRef)}>
                <img src={PaLogo} alt="PA Logo" style={{ width: '2rem' }} />
                Philipp Alber
              </MenuNavItemBold>

              <MenuNavItem onClick={() => scrollTo(AboutMeRef)}>{t('nav.about-me')}</MenuNavItem>

              <MenuNavItem onClick={() => scrollTo(ProjectsRef)}>{t('nav.projects')}</MenuNavItem>

              <MenuNavItem onClick={() => scrollTo(SourceRef)}>{t('nav.source')}</MenuNavItem>

              <Link color="inherit" href="mailto:info@philippalber.de" underline="none">
                <MenuNavItem>
                  {t('nav.contact')} <EmailIcon />
                </MenuNavItem>
              </Link>
            </Box>

            {/* Mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, py: 1, px: 2, justifyContent: 'flex-start', alignItems: 'center', width: 'fill-available' }}>
              <MenuNavItemBold onClick={() => scrollTo(HomeRef)}>
                <img src={PaLogo} alt="PA Logo" style={{ width: '2rem' }} />
              </MenuNavItemBold>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={7} sm={2}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, py: 1, gap: 2, alignItems: 'center' }}>
              <DarkModeToggle onChange={toggleColorMode} isDarkMode={theme.palette.mode === 'dark'} size={50} />
              <LanguagesSwitch />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, px: 1, pr: 3, justifyContent: 'flex-end', alignItems: 'center' }}>
              <DarkModeToggle onChange={toggleColorMode} isDarkMode={theme.palette.mode === 'dark'} size={50} />
              <LanguagesSwitch />

              <IconButton onClick={() => setDrawer(true)}>
                <MenuIcon />
              </IconButton>

              {/* Top Drawer Menu */}
              <Drawer
                anchor={'top'}
                open={drawerStatus}
                onClose={() => setDrawer(false)}
                PaperProps={{ style: { backgroundColor: 'transparent' } }}
                SlideProps={{ easing: 'ease-in-out' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    p: 2,
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    backdropFilter: 'blur(10px)',
                    backgroundColor: theme.palette.background.mobileDrawerMenu,
                  }}
                >
                  <MenuNavItem>
                    <IconButton onClick={() => setDrawer(false)}>
                      <CloseIcon />
                    </IconButton>
                  </MenuNavItem>

                  <MenuNavItemBold onClick={() => scrollWithCloseDrawer(HomeRef)}>
                    <img src={PaLogo} alt="PA Logo" style={{ width: '2rem' }} />
                    Philipp Alber
                  </MenuNavItemBold>

                  <MenuNavItem onClick={() => scrollWithCloseDrawer(AboutMeRef)}>{t('nav.about-me')}</MenuNavItem>

                  <MenuNavItem onClick={() => scrollWithCloseDrawer(ProjectsRef)}>{t('nav.projects')}</MenuNavItem>

                  <MenuNavItem onClick={() => scrollWithCloseDrawer(SourceRef)}>{t('nav.source')}</MenuNavItem>

                  <Link color="inherit" href="mailto:info@philippalber.de" underline="none">
                    <MenuNavItem>
                      {t('nav.contact')} <EmailIcon />
                    </MenuNavItem>
                  </Link>
                </Box>
              </Drawer>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
