import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';
import { Container, ProjectList } from '../assets/styles/globalStyle';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LockIcon from '@mui/icons-material/Lock';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectDetails {
  title: string;
  description: string;
  link: string | null;
  repoLink: string | null;
  private: boolean;
  languages: string[];
  frameworks: string[];
}

const projects: ProjectDetails[] = [
  {
    title: t('projects.orderButler.title'),
    description: t('projects.orderButler.description'),
    link: null,
    repoLink: null,
    private: true,
    languages: ['JS'],
    frameworks: ['React', 'Express', 'MongoDB'],
  },
  {
    title: t('projects.HLM.title'),
    description: t('projects.HLM.description'),
    link: 'https://heuberger.app',
    repoLink: null,
    private: true,
    languages: ['TS'],
    frameworks: ['React', 'Flutter', 'Supabase'],
  },
  {
    title: t('projects.portfolio.title'),
    description: t('projects.portfolio.description'),
    link: 'https://philippalber.de',
    repoLink: 'https://github.com/coolusaHD/portfolio',
    private: false,
    languages: ['TS'],
    frameworks: ['React'],
  },
  {
    title: t('projects.pollenBot.title'),
    description: t('projects.pollenBot.description'),
    link: 'https://coolusahd.github.io/pollen-discord-bot/',
    repoLink: 'https://github.com/coolusaHD/pollen-discord-bot',
    private: false,
    frameworks: ['Discord.js'],
    languages: ['JS'],
  },
];

const openSite = (link: string | null) => () => {
  if (link) {
    window.open(link, '_blank');
  }
};

/**
 * Render Projects component
 *
 * @return {React.ReactElement}
 */
export default function Projects(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      <Grid item xs={1} md={3} />

      <Grid item xs={10} md={6}>
        <Container data-aos="fade-up" data-aos-duration="500">
          <Typography variant="h2">{t('projects.title')}</Typography>

          <br />

          <Typography variant="h5" align="left">
            {t('projects.description')}
          </Typography>

          <br />

          <Typography variant="caption" align="left">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LockIcon fontSize="small" />
              {t('projects.legends.private')}

              <Divider orientation="vertical" flexItem />

              <GitHubIcon fontSize="small" />
              {t('projects.legends.github')}

              <Divider orientation="vertical" flexItem />

              <OpenInNewIcon fontSize="small" />
              {t('projects.legends.website')}
            </Box>
          </Typography>

          <br />

          <ProjectList>
            <Box sx={{ width: '100%', bgcolor: 'background', borderRadius: 5, py: 2 }}>
              {projects.map((project) => (
                <Accordion key={project.title}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, width: 'fill-available' }}>
                      <Typography variant="h6">{project.title}</Typography>
                      <Box>
                        {project.private && (
                          <IconButton disabled>
                            <LockIcon />
                          </IconButton>
                        )}
                        {!project.private && (
                          <>
                            <IconButton onClick={openSite(project.repoLink)}>
                              <GitHubIcon />
                            </IconButton>
                            <IconButton onClick={openSite(project.link)}>
                              <OpenInNewIcon />
                            </IconButton>
                          </>
                        )}
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{project.description}</Typography>
                    <br />
                    <Typography color="primary" align="right" variant="caption">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        ({project.languages.join(', ')}, {project.frameworks.join(', ')})
                      </Box>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </ProjectList>
        </Container>
      </Grid>

      <Grid item xs={1} md={3} />
    </Grid>
  );
}
