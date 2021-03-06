import React from 'react';
import { Container, SourceDescription, SourceItem, SourceImage, SourceImageContainer } from '../assets/styles/globalStyle';
import { Link } from '@mui/material';
import { Grid, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Tooltip from '@mui/material/Tooltip';
import MuiLogo from '../assets/images/mui_logo.png';
import ReactLogo from '../assets/images/react_logo.png';
import StyledComponentsLogo from '../assets/images/styled-components_logo.png';

/**
 * Render Source component
 *
 * @return {React.ReactElement}
 */
export default function Source(): React.ReactElement {
  return (
    <Grid container spacing={3}>
      <Grid item xs={1} md={3} />

      <Grid item xs={10} md={6}>
        <Container data-aos="fade-up" data-aos-duration="500">
          <Typography variant="h2">Source Pakete</Typography>

          <br />

          <Typography align="left" variant="h5">
            Diese Website wurde unter anderem mit folgenden Paketen 📂 enwickelt:
          </Typography>
          <Typography variant="h5" align="left">
            Alle Pakete und den kompletten Quellcode findet ihr auf{' '}
            <Link color="inherit" href="https://github.com/coolusaHD/portfolio" target="_blank" rel="noreferrer">
              GitHub
              <OpenInNewIcon />
            </Link>
            .
          </Typography>
          <br />
          <br />

          <SourceDescription>
            <SourceItem>
              <Tooltip title="React" arrow placement="top">
                <SourceImageContainer
                  onClick={() => {
                    window.open('https://reactjs.org/');
                  }}
                >
                  <SourceImage src={ReactLogo} alt="React Logo" />
                </SourceImageContainer>
              </Tooltip>

              <Tooltip title="MUI" arrow placement="top">
                <SourceImageContainer
                  onClick={() => {
                    window.open('https://mui.com/');
                  }}
                >
                  <SourceImage src={MuiLogo} alt="Mui Logo" />
                </SourceImageContainer>
              </Tooltip>

              <Tooltip title="Styled Components" arrow placement="top">
                <SourceImageContainer
                  onClick={() => {
                    window.open('https://styled-components.com/');
                  }}
                >
                  <SourceImage src={StyledComponentsLogo} alt="Styled Components Logo" />
                </SourceImageContainer>
              </Tooltip>
            </SourceItem>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<OpenInNewIcon />}
              endIcon={<GitHubIcon />}
              onClick={() => {
                window.open('https://github.com/coolusaHD/portfolio');
              }}
            >
              Zum Github Repository
            </Button>
          </SourceDescription>
        </Container>
      </Grid>

      <Grid item xs={1} md={3} />
    </Grid>
  );
}
