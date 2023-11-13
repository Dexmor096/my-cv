import { Stack, Typography } from '@mui/material'

export const Contacts: React.FC = () => {
	return (
		<Stack spacing={1} sx={{ textAlign: 'start', backgroundColor: '#e2e2e2', color: '#000', p:3 }}>
			<Typography variant='h4' component='h2'>
				Гладкий Константин Павлович
			</Typography>
			<Typography variant='body2' component='h5'>
				Резюме на должность:
			</Typography>
			<Typography variant='body1' component='p' sx={{color: '#00a7e1'}}>
				Frontend Developer
			</Typography>

		</Stack>
	)
}