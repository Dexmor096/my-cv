import { Divider, ListItemIcon, Typography } from '@mui/material';

type TitleProps = {
	icon: React.ReactElement,
	title: string,
	color: string
}
export const Title: React.FC<TitleProps> = (props) => {
	const {icon, title, color} = props;
	return (
		<>
			<Typography component='span' variant='h5' sx={{display: 'flex', alignItems: 'center'}}>
				<ListItemIcon sx={{ minWidth:'40px', color: color}}>{icon}</ListItemIcon>
			{title}
		</Typography>
		<Divider sx={{mb: 2, border: 1, borderBlockColor: color}}/>
		</>
	)
}