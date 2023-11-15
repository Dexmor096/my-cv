import { Divider, ListItemIcon, Stack, Typography } from '@mui/material';
import { Iinfo } from './constants/information';

interface IinfoProps {
	title: string,
	icon: React.ReactElement,
	id: number,
	info: Iinfo[],
}

export const Info: React.FC<IinfoProps> = (props) => {
	console.log(props)
	const {title, icon, id, info} = props;
	return (<Stack sx={{p: 2}}>
		<Typography component='span' variant='h5' sx={{display: 'flex', alignItems: 'center'}}>
			<ListItemIcon sx={{ minWidth:'40px', color: '#000000'}}>{icon}</ListItemIcon>
			{title}
		</Typography>
		<Divider sx={{mb: 2, border: 1, borderBlockColor: '#808080'}}/>
		{
			info.map((el) => {
						return <Stack spacing={1} direction='row' key={id}>
							<Typography sx={{ color: '#808080' }}>{el.subtitle}:</Typography>
							<Typography sx={{ color: '#000000' }}>{el.description}</Typography>
						</Stack>
			})
		}
		</Stack>
	)
}