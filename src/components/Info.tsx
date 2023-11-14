import { Divider, ListItemIcon, Stack, Typography } from '@mui/material';
import { information } from './constants/information';

export const Info: React.FC = () => {
	return (<Stack sx={{p: 2}}>
		<Typography component='span' variant='h5' sx={{display: 'flex', alignItems: 'center'}}>
			<ListItemIcon sx={{ minWidth:'40px', color: '#000000'}}>{information[0].icon}</ListItemIcon>
			{information[0].title}
		</Typography>
		<Divider sx={{mb: 2, border: 1, borderBlockColor: '#808080'}}/>
		{
			information.map(el => {
				if(el.info) {
					return el.info.map((element, index) => {
						return <Stack spacing={1} direction='row' key={index}>
							<Typography sx={{ color: '#808080' }}>{element.subtitle}:</Typography>
							<Typography sx={{ color: '#000000' }}>{element.description}</Typography>
						</Stack>
					})
				}
				return null;
			})
		}
		</Stack>
	)
}