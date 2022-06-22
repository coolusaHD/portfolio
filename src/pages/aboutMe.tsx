import React from 'react';
import { AboutMeContainer, AboutMeDescription } from '../assets/styles/globalStyle';
import { Link } from '@mui/material';
import { Grid, Typography } from '@mui/material';

/**
 * Render AboutMe component
 *
 * @return {React.ReactElement}
 */
export default function AboutMe(): React.ReactElement {
  const age = new Date().getFullYear() - 2001;

  return (
    <Grid container spacing={3}>
      <Grid item xs={1} md={3} />

      <Grid item xs={10} md={6}>
        <AboutMeContainer data-aos="fade-up" data-aos-duration="500">
          <Typography variant="h2">Über mich:</Typography>

          <br />

          <Typography variant="h5">Hallo 👋 Ich bin Philipp</Typography>
          <AboutMeDescription>
            Ich bin {age} Jahre alt und studiere Informatik an der{' '}
            <Link color="inherit" href="https://uni-tuebingen.de/" underline="always">
              Eberhard Karls Universität
            </Link>{' '}
            in Tübingen.
            <br />
            <br />
            Seit ich 16 bin, programmiere ich leidenschaftlich Websites. Mit den Jahren habe ich durch verschiedenste Projekte immer mehr Erfahrungen in
            Programmiersprachen und der Entwicklung von Web-Applikationen gesammelt.
            <br />
            <br />
            Außerhalb meiner IDE findet man mich auch gerne auf dem Fussballfeld oder der Skipiste mit meinen Freunden.
          </AboutMeDescription>
        </AboutMeContainer>
      </Grid>

      <Grid item xs={1} md={3} />
    </Grid>
  );
}
