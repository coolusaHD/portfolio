import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button, Grid, Link, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MuiLogo from '../assets/images/mui_logo.png';
import ReactLogo from '../assets/images/react_logo.png';
import StyledComponentsLogo from '../assets/images/styled-components_logo.png';
import { Container, SourceDescription, SourceImage, SourceImageContainer, SourceItem } from '../assets/styles/globalStyle';

interface SourceDetails {
  title: string;
  img: any;
  alt: string;
  link: string;
}

const sources: SourceDetails[] = [
  {
    title: 'React',
    img: ReactLogo,
    alt: 'React Logo',
    link: 'https://reactjs.org/',
  },
  {
    title: 'MUI',
    img: MuiLogo,
    alt: 'Mui Logo',
    link: 'https://mui.com/',
  },
  {
    title: 'Styled Components',
    img: StyledComponentsLogo,
    alt: 'Styled Components Logo',
    link: 'https://styled-components.com/',
  },
];

/**
 * Render Source component
 *
 * @return {React.ReactElement}
 */
export default function Source(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      <Grid item xs={1} md={3} />

      <Grid item xs={10} md={6}>
        <Container data-aos="fade-up" data-aos-duration="500">
          <Typography variant="h2">{t('source.title')}</Typography>

          <br />

          <Typography align="left" variant="h5">
            {t('source.description')}
          </Typography>
          <Typography variant="h5" align="left">
            {t('source.description2')}
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
              {sources.map((source) => (
                <Tooltip key={source.title} title={source.title} arrow placement="top">
                  <SourceImageContainer
                    onClick={() => {
                      window.open(source.link);
                    }}
                  >
                    <SourceImage src={source.img} alt={source.alt} />
                  </SourceImageContainer>
                </Tooltip>
              ))}
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
