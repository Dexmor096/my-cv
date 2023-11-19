import { ListItemIcon, Stack, Typography } from '@mui/material';
import { Iinfo } from './constants/information';
import { Title } from './Title'

export interface IinfoProps {
	title: string,
	icon: React.ReactElement,
	side?: boolean,
	id?: number,
	info?: Iinfo[],
}

export const Info: React.FC<IinfoProps> = (props) => {
	const {title, icon, id, info, side} = props;
	return (
	<Stack key={id} sx={{p: 2}}>
		<Title title={title} icon={icon} color={side ? '#fff' : '#000000'}/>
		{
			info?.map((el, index) => {
				return <Stack spacing={2} direction='row' key={index}>
					{	el.icon 
					? <ListItemIcon sx={{ maxWidth: '25px', minWidth: '16px', pr: 1, cursor: 'pointer' }}>{el.icon}</ListItemIcon>
					: <Typography sx={{ color: side ? '#000000' : '#808080', textAlign: 'start' }}>{el.subtitle}{el.subtitle === ('-' || ' ') ? ' ': ':'}</Typography>
					}
						<Typography sx={{ color: side ? '#fff' : '#000000', textAlign: 'start' }}>{el.description}</Typography>
					</Stack>
			})
		}
		</Stack>
	)
}