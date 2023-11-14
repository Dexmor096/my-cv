import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
interface info {
	subtitle: string,
	description: string,
}
interface Iinformation {
	id: number,
	icon: React.ReactElement,
	title: string,
	info: info[],
	isBold: boolean
}
export const information :Iinformation[] = [
	{
		id: 0,
		icon: <PersonIcon />,
		title: 'Личная информация',		
		info: [
			{
				subtitle: 'Гражданство',
				description: 'Российская Федерация',
			},
			{
				subtitle: 'Город проживания',
				description: 'г. Севастополь',
			}
		],
		isBold: false
	}
]