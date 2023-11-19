import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
// import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InfoIcon from '@mui/icons-material/Info';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';

import { JavaScriptIcon } from '../icons/JavaScriptIcon';
import { Html5Icon } from '../icons/Html5Icon';
import { CssIcon } from '../icons/CssIcon';
import { GitIcon } from '../icons/GitIcon';
import { MuiIcon } from '../icons/MuiIcon';
import { NextJsIcon } from '../icons/NextJsIcon';
import { ReactIcon } from '../icons/ReactIcon';
import { ReduxIcon } from '../icons/ReduxIcon';
import { TypescriptIcon } from '../icons/TypescriptIcon';

export interface Iinfo {
	subtitle: string,
	icon?: React.ReactElement,
	description: string,
	separator?: boolean,
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
				description: 'РФ',
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
				description: 'Frontend Developer',
			},
			{
				subtitle: 'Компания',
				description: 'Rolling Scope School',
			},
			{
				subtitle: 'Период работы',
				description: 'март 2023 - сентябрь 2023 (7 месяцев)',
			},
			{
				subtitle: 'Обязанности и достижения',
				description: '',
			},
			{
				subtitle: '-',
				description: 'Подключил валидацию данных авторизации на клиенте и сервере.',
			},
			{
				subtitle: '-',
				description: 'Разработал и успешно реализовал запросы на сервер для получения продуктов в проекте, что помогло улучшить навыки работы с API.',
			},
			{
				subtitle: '-',
				description: 'Внедрил и настроил Redux Toolkit для организации хранилища данных в проекте, что позволило улучшить структурирование и управление состоянием приложения, и способствовало повышению его производительности и масштабируемости.',
			},
			{
				subtitle: '-',
				description: 'Проводил код ревью и планировал задачи на следующий спринт, это помогло улучшить навыки совместной работы в команде и понимание принципов работы полноценного приложения.',
			},
			{
				subtitle: 'Должность',
				description: 'Менеджер по работе с клиентами',
			},
			{
				subtitle: 'Компания',
				description: 'ООО «Фаэтонъ»',
			},
			{
				subtitle: 'Период работы',
				description: 'октябрь 2017  март 2023 (5 лет 6 месяцев)',
			},
			{
				subtitle: 'Обязанности и достижения',
				description: '',
			},
			{
				subtitle: '-',
				description: 'Организация и планирование работы над проектами в продажах помогли развить навыки управления временем, что важно для выполнения задач в срок и планирования работы в разработке.',
			},
			{
				subtitle: '-',
				description: 'Работа с клиентами в продажах научила меня учитывать потребности пользователей при разработке интерфейсов и функционала веб-приложений.',
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
				description: 'Rolling Scope School',
			},
			{
				subtitle: 'Факультет',
				description: 'Web Developer',
			},
			{
				subtitle: 'Специальность',
				description: 'Frontend Developer',
			},
			{
				subtitle: 'Дата окончания',
				description: '2023 г.',
			},
			{
				subtitle: '-',
				description: ' ',
			},
			{
				subtitle: 'Учебное заведение',
				description: 'Севастопольский Государственный Университет',
			},
			{
				subtitle: 'Факультет',
				description: 'Физика',
			},
			{
				subtitle: 'Специальность',
				description: 'Биофизика',
			},
			{
				subtitle: 'Дата окончания',
				description: '2010 г.',
			},
		],
	},
	// {
	// 	id: 3,
	// 	icon: <AutoStoriesIcon />,
	// 	title: 'Курсы и тренинги',		
	// 	info: [
	// 		{
	// 			subtitle: 'Учебное заведение',
	// 			description: '',
	// 		},
	// 		{
	// 			subtitle: 'Факультет',
	// 			description: 'г. Севастополь',
	// 		},
	// 		{
	// 			subtitle: 'Специальность',
	// 			description: 'Высшее',
	// 		},
	// 		{
	// 			subtitle: 'Дата окончания',
	// 			description: '29.10.1988 г.',
	// 		},
	// 	],
	// },
	{
		id: 4,
		icon: <InfoIcon />,
		title: 'Обо мне',		
		info: [
			{
				subtitle: '-',
				description: 'что то',
			},
			{
				subtitle: '-',
				description: 'что то',
			},
			{
				subtitle: '-',
				description: 'что то',
			},
			{
				subtitle: '-',
				description: 'что то',
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
		id: 6,
		icon: <ComputerIcon />,
		side: true,
		title: 'Навыки',		
		info: [
			{
				subtitle: '-',
				icon: <JavaScriptIcon />,
				description: 'JavaScript',
			},
			{
				subtitle: '-',
				icon: <Html5Icon />,
				description: 'HTML',
			},
			{
				subtitle: '-',
				icon: <CssIcon />,
				description: 'CSS',
			},
			{
				subtitle: '-',
				icon: <ReactIcon />,
				description: 'React',
			},
			{
				subtitle: '-',
				icon: <ReduxIcon />,
				description: 'Redux Toolkit',
			},
			{
				subtitle: '-',
				icon: <TypescriptIcon />,
				description: 'Typescript',
			},
			{
				subtitle: '-',
				icon: <GitIcon />,
				description: 'Git',
			},
			{
				subtitle: '-',
				icon: <MuiIcon />,
				description: 'Material UI',
			},
			{
				subtitle: '-',
				icon: <NextJsIcon />,
				description: 'Next JS',
			},
		],
	}
]