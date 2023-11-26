import { Stack } from '@mui/system';
import { Photo } from './Photo';
import { ProfSkills } from './ProfSkills';

import { theme } from '../theme';

export const SideBar = () => {
	return (
		<Stack sx={{backgroundColor: theme.palette.secondary.dark }}>
			<Photo />
			<ProfSkills />
		</Stack>
	)
}