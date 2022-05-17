import React from 'react';
import { ColoredText, ProfilePicture, ProfilePictureContainer, Description } from './style/welcomeStyle.js';
import { Grid, Typography } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import Profile from '../../images/profile.png';

/**
 * Welcome Component
 *
 * @return {React.ReactElement}
 */
export default function Welcome(): React.ReactElement {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={1} md={3} />

      <Grid item xs={10} md={6}>
        <Typography variant="h1">Willkommen</Typography>

        <Typography align="right" variant="h2">
          auf meinem <ColoredText color={theme.palette.secondary.main}>Portfolio</ColoredText>
        </Typography>

        <Typography color="primary" align="right" variant="h6" sx={{ fontWeight: '300' }}>
          by Philipp Alber
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ProfilePictureContainer>
              <ProfilePicture src={Profile} loading="lazy" alt="Profile Picture" />
            </ProfilePictureContainer>
          </Grid>

          <Grid item xs={12} md={8} sx={{ p: 2, mt: { xs: 0, md: 10 } }}>
            <Description>
              Full-Stack Developer, <br /> UI/UX Designer und Web-Entwickler
            </Description>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={1} md={3} />
    </Grid>
  );
}
