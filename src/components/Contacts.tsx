import { Stack, Typography } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { headeritems } from './constants/headeritems';

export const Contacts: React.FC = () => {
	return (
		<Stack 
			spacing={1} sx={{ 
				textAlign: 'start', 
				backgroundColor: '#e1e1e1', 
				color: '#000', 
				p:3 
				}}>
			<Typography variant='h4' component='h2'>
				Гладкий Константин Павлович
			</Typography>
			<Typography variant='body2' component='h5'>
				Резюме на должность:
			</Typography>
			<Typography 
				variant='body1' 
				component='span' 
				sx={{color: '#077eb6'}}>
					Frontend Developer
			</Typography>
				{headeritems.map((text, index) => (
					<Typography sx={{ display: 'flex', alignItems: 'center' }} component='span' key={index}>
						<ListItemIcon sx={{ minWidth:'40px', color: '#077eb6' }}>{text.icon}</ListItemIcon>
						{text.label}
					</Typography>
				))}
		</Stack>
	)
}