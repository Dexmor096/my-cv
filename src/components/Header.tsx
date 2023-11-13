import React from 'react';
import { Stack } from '@mui/material'
import { Photo } from './Photo'
import { Contacts } from './Contacts'

const Header: React.FC = () => {
	return (
    <Stack spacing={5} direction="row">
      <Photo />
      <Contacts />
    </Stack>
	)
}

export default Header;