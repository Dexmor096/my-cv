import CardMedia from '@mui/material/CardMedia'
import { Box } from '@mui/system'

export const Photo: React.FC = () => {
	return (
		<Box>
			<CardMedia 
				sx={{ height: 300 }} 
				title="my photo" 
				component="img" 
				image="./src/assets/photo.jpg" />
		</Box>
	)
}