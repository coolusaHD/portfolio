import React from 'react';
import { ProjectList, Container } from './style/projectsStyle.js';
import { Box } from '@mui/material';
import { Grid, Typography } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * Render Projects component
 *
 * @return {React.ReactElement}
 */
export default function Projects(): React.ReactElement {
  return (
    <Grid container spacing={3}>
      <Grid item xs={1} md={3} />

      <Grid item xs={10} md={6}>
        <Container>
          <Typography variant="h2">Meine Projekte</Typography>

          <br />

          <Typography variant="h5" align="left">
            Übersicht über eine Auswahl von Projekten, an denen ich aktiv mitgewirkt habe.
          </Typography>

          <br />

          <ProjectList>
            <Box sx={{ width: '100%', bgcolor: 'background', borderRadius: 5, py: 2 }}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">Order-Butler</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Der Order-Butler ist eine Software, um interne Betriebabläufe beim Bewerten von Pokemon Karten zu unterstützten. Dabei arbeiten wir mit einem
                    Digitalen Laufzettel, welcher durch einen QR-Code mit der Bestellung verknüpft wird.
                  </Typography>
                  <br />
                  <Typography color="primary" align="right" variant="caption">
                    {' '}
                    (JS, REACT, Express, MongoDB){' '}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">Heuberg Live Ticker App & Manager </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Die Heuberg Live Ticker App ist, wie der Name schon sagt, eine Liver-Ticker App für das Lokale Fussballtunier auf dem Heuberg. Der Manager agiert
                    dabei als Tunierleitungssoftware und verwaltet alle Daten, welche von den Gästen mit Hilfe der App abgerufen werden können.
                  </Typography>
                  <br />
                  <Typography color="primary" align="right" variant="caption">
                    (JS, REACT, REACT Native, Express, MongoDB)
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">Portfolio</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Ein interaktives Porftfolio, welches die Person und deren Projekte schlicht und stilvoll darstellt. Portfolio dient dabei als perfekte Ergänzung zum
                    herkömmlichen Lebenslauf.
                  </Typography>
                  <br />
                  <Typography color="primary" align="right" variant="caption">
                    (JS, REACT)
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </ProjectList>
        </Container>
      </Grid>

      <Grid item xs={1} md={3} />
    </Grid>
  );
}
