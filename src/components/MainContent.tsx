import React from 'react';
import { Stack } from '@mui/system';
import { Info } from './Info';
import { information } from './constants/information';
const MainContent: React.FC = () => {
	return (
		<Stack>
			{information.map((element, index) => {
				if(!element.side) {
					return <Info key={index} {...element}/>
				}
			}
					)}
		</Stack>
	)
}

export default MainContent;