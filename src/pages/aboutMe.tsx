import { Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AboutMeContainer, AboutMeDescription } from '../assets/styles/globalStyle';

/**
 * Render AboutMe component
 *
 * @return {React.ReactElement}
 */
export default function AboutMe(): React.ReactElement {
  const age = new Date().getFullYear() - 2001;
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      <Grid item xs={1} md={3} />

      <Grid item xs={10} md={6}>
        <AboutMeContainer data-aos="fade-up" data-aos-duration="500">
          <Typography variant="h2">{t('about-me.title')}</Typography>

          <br />

          <Typography variant="h5">{t('about-me.introduction')}</Typography>
          <AboutMeDescription>
            {t('about-me.age', { age })}
            <Link color="inherit" href="https://uni-tuebingen.de/" underline="always">
              {t('about-me.uni')}
            </Link>
            {t('about-me.uni.location')}
            <br />
            <br />
            {t('about-me.description1')}
            <br />
            <br />
            {t('about-me.description2')}
          </AboutMeDescription>
        </AboutMeContainer>
      </Grid>

      <Grid item xs={1} md={3} />
    </Grid>
  );
}
