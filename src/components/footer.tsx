import { Box, Grid, Toolbar } from '@mui/material';
import React from 'react';

/**
 * Render Footer component
 * @return {React.ReactElement}
 *
 */
export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <Toolbar variant="dense">
      <Grid container spacing={1}>
        <Grid item xs={1} md={3} />
        <Grid item xs={10} md={6}>
          <Box sx={{ display: 'flex', py: 1, justifyContent: 'center', alignItems: 'baseline', gap: 1 }}>Built and designed by Philipp Alber</Box>
          <Box sx={{ display: 'flex', py: 1, justifyContent: 'center', alignItems: 'baseline', gap: 1 }}>© {currentYear} All Rights Reserved.</Box>
        </Grid>
        <Grid item xs={1} md={3} />
      </Grid>
    </Toolbar>
  );
}
