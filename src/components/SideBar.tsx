import { Stack } from '@mui/system';
import { Photo } from './Photo';
import { ProfSkills } from './ProfSkills';

export const SideBar = () => {
	return (
		<Stack>
			<Photo/>
			<ProfSkills />
		</Stack>
	)
}