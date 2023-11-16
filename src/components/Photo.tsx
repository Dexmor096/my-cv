import CardMedia from '@mui/material/CardMedia'
import { Box } from '@mui/system'

export const Photo: React.FC = () => {
	return (
		<Box sx={{display: "flex", justifyContent: "center"}}>
			<CardMedia 
				sx={{ 
					maxHeight: 300,
					maxWidth: 300,
					p: 2 
				}} 
				title="my photo" 
				component="img" 
				image="./src/assets/photo.jpg" />
		</Box>
	)
}