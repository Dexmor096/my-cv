import * as React from 'react';
import Container from '@mui/material/Container';
import Header from '../components/Header'
import MainContent from '../components/MainContent'

export const MainPage: React.FC = () => {
	return (
		<React.Fragment>
      <Container maxWidth="xl">
				<Header />
				<MainContent />
      </Container>
    </React.Fragment>
	)
}