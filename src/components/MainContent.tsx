import React from 'react';
import Grid from '@mui/material/Grid';

const MainContent: React.FC = () => {
	return (
<Grid container spacing={2}>
  <Grid item xs={8}>
		side
  </Grid>
  <Grid item xs={4}>
		main
  </Grid>
</Grid>
	)
}

export default MainContent;