import React from 'react';
import { Stack } from '@mui/material'
import { Photo } from './Photo'
import { Contacts } from './Contacts'

const Header: React.FC = () => {
	return (
    <Stack spacing={3} direction="row">
      <Photo />
      <Contacts />
    </Stack>
	)
}

export default Header;