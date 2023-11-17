import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

interface IHeaderItem {
  id: number;
  icon: React.ReactElement;
  label: string;
}

export const headeritems: IHeaderItem[] = [
	{
    id: 0,
    icon: <LocalPhoneIcon />,
    label: '+7(978)-682-03-63'
  },
  {
    id: 1,
		icon: <EmailIcon />,
		label: 'kgladkiy.webdev@gmail.com'
	},
  {
    id: 2,
    icon: <PlaceIcon />,
    label: 'Место проживания: г. Севастополь'
  },
]