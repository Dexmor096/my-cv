import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material'

const Header: React.FC = () => {
	return (
<Grid container spacing={2}>
  <Grid item xs={8}>
		<Box />
  </Grid>
  <Grid item xs={4}>
  </Grid>
</Grid>
	)
}

export default Header;