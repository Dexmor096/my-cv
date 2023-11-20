import * as React from 'react';
import Container from '@mui/material/Container';
import MainContent from '../components/MainContent';
import { SideBar } from '../components/SideBar';
import { Grid } from '@mui/material';
import { Contacts } from '../components/Contacts';

export const MainPage: React.FC = () => {
	return (
      <Container sx={{
				maxWidth: {
					md: "xl"
				}
			}} >
				<Grid container spacing={1} direction="row">
					<Grid item xs={4}>
						<SideBar />
					</Grid>
					<Grid item container spacing={1} xs={8}>
						<Grid item xs={12}>
							<Contacts />
						</Grid>
						<Grid item xs={12}>
							<MainContent />
						</Grid>
					</Grid>
				</Grid>
      </Container>
	)
}