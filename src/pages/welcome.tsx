import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ColoredText, ProfileDescription, ProfilePicture, ProfilePictureContainer } from '../assets/styles/globalStyle';

import Profile from '../assets/images/profile.png';

/**
 * Welcome Component
 *
 * @return {React.ReactElement}
 */
export default function Welcome(): React.ReactElement {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      <Grid item xs={1} md={3} />

      <Grid item xs={10} md={6}>
        <Typography variant="h1">{t('welcome.title')}</Typography>

        <Typography align="right" variant="h2">
          {t('welcome.title2.1')} <ColoredText color={theme.palette.secondary.main}>{t('welcome.title2.2')}</ColoredText>
        </Typography>

        <Typography color="primary" align="right" variant="h6" sx={{ fontWeight: '300' }}>
          {t('welcome.title.author')}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ProfilePictureContainer>
              <ProfilePicture src={Profile} loading="lazy" alt="Profile Picture" />
            </ProfilePictureContainer>
          </Grid>

          <Grid item xs={12} md={8} sx={{ p: 2, mt: { xs: 0, md: 10 } }}>
            <ProfileDescription data-aos="fade-up" data-aos-delay="1500" data-aos-duration="500">
              {t('welcome.subtitle.job1')}, <br /> {t('welcome.subtitle.job2')}
            </ProfileDescription>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={1} md={3} />
    </Grid>
  );
}
