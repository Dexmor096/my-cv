import { Stack } from '@mui/system';
import { Photo } from './Photo';
import { ProfSkills } from './ProfSkills';

export const SideBar = () => {
	return (
		<Stack sx={{backgroundColor: "#077eb6"}}>
			<Photo />
			<ProfSkills />
		</Stack>
	)
}