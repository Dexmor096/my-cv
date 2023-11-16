import { Info } from './Info';

import { information } from './constants/information';
import { Box } from '@mui/material'

export const ProfSkills = () => {
	return (
		<Box sx={{color: '#ffffff'}}>
			{information.map((element, index) => {
				if(element.side) {
					return <Info key={index} {...element}/>
				}
			}
			)}
		</Box>
	)
}