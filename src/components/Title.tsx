import { 
	createTheme,
	Divider, 
	ListItemIcon, 
	responsiveFontSizes, 
	ThemeProvider, 
	Typography 
} from '@mui/material';

let theme= createTheme();
theme = responsiveFontSizes(theme);
type TitleProps = {
	icon: React.ReactElement,
	title: string,
	color: string
}
export const Title: React.FC<TitleProps> = (props) => {
	const {icon, title, color} = props;
	return (
		<ThemeProvider theme={theme}>
			<Typography component='span' variant='h5' sx={{display: 'flex', alignItems: 'center'}}>
				<ListItemIcon sx={{ minWidth:'40px', color: color}}>{icon}</ListItemIcon>
			{title}
		</Typography>
		<Divider sx={{mb: 2, border: 1, borderBlockColor: color}}/>
		</ThemeProvider>
	)
}