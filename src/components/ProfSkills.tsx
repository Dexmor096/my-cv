import { Info } from './Info'

import { information } from './constants/information';

export const ProfSkills = () => {
	return (
		<>
			{information.map((element, index) => (
				<Info key={index} {...element}/>
			))}
		</>
	)
}