import React from 'react';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';

/**
 * Render Footer component
 * @return {React.ReactElement}
 *
 */
export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <Toolbar variant="dense">
      <Grid container spacing={4}>
        <Grid item sm={1} md={3} />
        <Grid item sm={10} md={6}>
          <Box sx={{ display: 'flex', py: 1, justifyContent: 'center', alignItems: 'baseline', gap: 1 }}>Built and designed by Philipp Alber</Box>
          <Box sx={{ display: 'flex', py: 1, justifyContent: 'center', alignItems: 'baseline', gap: 1 }}>© {currentYear} All Rights Reserved.</Box>
        </Grid>
        <Grid item sm={1} md={3} />
      </Grid>
    </Toolbar>
  );
}
