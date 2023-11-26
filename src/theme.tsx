import { createTheme } from '@mui/material'

export const theme = createTheme({
	palette: {
		primary: {
			main: "#000000",
			light: "#808080"
		},
		secondary: {
			main: "#fff",
			dark: "#077eb6"
		}
	},
	breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1536,
    },
  },
})