import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InfoIcon from '@mui/icons-material/Info';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';

// import { ReactComponent as JavaScriptIcon } from '';
import JavaScriptIcon from './java-script-white.svg';


export interface Iinfo {
	subtitle: string,
	description: string,
}
interface Iinformation {
	id: number,
	icon: React.ReactElement,
	side?: boolean,
	title: string,
	info: Iinfo[],
}
export const information :Iinformation[] = [
	{
		id: 0,
		icon: <PersonIcon />,
		side: true,
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
		id: 2,
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
	},
	{
		id: 3,
		icon: <AutoStoriesIcon />,
		title: 'Курсы и тренинги',		
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
	},
	{
		id: 4,
		icon: <InfoIcon />,
		title: 'Обо мне',		
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
	},
	{
		id: 5,
		icon: <LanguageIcon />,
		side: true,
		title: 'Знание языков',		
		info: [
			{
				subtitle: 'Русский',
				description: 'Родной',
			},
			{
				subtitle: 'Английский',
				description: 'B1 - Средний',
			}
		],
	},
	{
		id: 5,
		icon: <ComputerIcon />,
		side: true,
		title: 'Навыки',		
		info: [
			{
				subtitle: '-',
				description: 'Родной',
			},
			{
				subtitle: '-',
				description: 'B1 - Средний',
			},
			{
				subtitle: '-',
				description: 'Родной',
			},
			{
				subtitle: '-',
				description: 'Родной',
			},
			{
				subtitle: '-',
				description: 'Родной',
			},
			{
				subtitle: '-',
				description: 'Родной',
			},
		],
	}
]