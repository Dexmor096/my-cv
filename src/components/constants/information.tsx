import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
export interface Iinfo {
	subtitle: string,
	description: string,
}
interface Iinformation {
	id: number,
	icon: React.ReactElement,
	title: string,
	info: Iinfo[],
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
			},
			{
				subtitle: 'Образование',
				description: 'Высшее',
			},
			{
				subtitle: 'Дата рождения',
				description: '29.10.1988 г.',
			},
			{
				subtitle: 'Пол',
				description: 'Мужской',
			},
		],
	},
	{
		id: 1,
		icon: <BusinessCenterIcon />,
		title: 'Опыт Работы',		
		info: [
			{
				subtitle: 'Должность',
				description: '',
			},
			{
				subtitle: 'Компания',
				description: 'г. Севастополь',
			},
			{
				subtitle: 'Период работы',
				description: 'Высшее',
			},
			{
				subtitle: 'Обязанности и достижения',
				description: '29.10.1988 г.',
			},
		],
	},
	{
		id: 1,
		icon: <SchoolIcon />,
		title: 'Образование',		
		info: [
			{
				subtitle: 'Учебное заведение',
				description: '',
			},
			{
				subtitle: 'Факультет',
				description: 'г. Севастополь',
			},
			{
				subtitle: 'Специальность',
				description: 'Высшее',
			},
			{
				subtitle: 'Дата окончания',
				description: '29.10.1988 г.',
			},
		],
	}
]