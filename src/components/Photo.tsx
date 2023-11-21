import CardMedia from '@mui/material/CardMedia'
import { Box } from '@mui/system'

export const Photo: React.FC = () => {
	return (
		<Box sx={{display: "flex", justifyContent: "center"}}>
			<CardMedia 
				sx={{ 
					p: 1,
					maxWidth: {
						sm: 150,
						lg: 300
					},
					display: {
						xs: "none",
						sm: "block"
					}
				}} 
				title="my photo" 
				component="img" 
				image="./src/assets/photo.jpg" />
		</Box>
	)
}