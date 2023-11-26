import { ListItemIcon, Stack, Typography } from '@mui/material';
import { Iinfo } from './constants/information';
import { Title } from './Title';
import { theme } from '../theme';

export interface IinfoProps {
	title: string,
	icon: React.ReactElement,
	side?: boolean,
	id?: number,
	info?: Iinfo[],
}

export const Info: React.FC<IinfoProps> = (props) => {
	const {title, icon, id, info, side} = props;
	const colorTheme = theme.palette;
	return (
			<Stack key={id} sx={{p: 2}}>
				<Title title={title} icon={icon} color={side ? colorTheme.secondary.main : colorTheme.primary.main}/>
				{
					info?.map((el, index) => {
						return <Stack spacing={2} direction='row' key={index}>
							{	el.icon 
							? <ListItemIcon sx={{ maxWidth: '25px', minWidth: '16px', pr: 1, cursor: 'pointer' }}>{el.icon}</ListItemIcon>
							: <Typography variant="body2" sx={{ color: side ? colorTheme.primary.main : colorTheme.primary.light, textAlign: 'start' }}>{el.subtitle}{el.subtitle === ('-' || ' ') ? ' ': ':'}
							</Typography>
							}
								<Typography variant="body2" sx={{ color: side ? colorTheme.secondary.main : colorTheme.primary.main, textAlign: 'start' }}>{el.description}</Typography>
							</Stack>
					})
				}
			</Stack>
	)
}