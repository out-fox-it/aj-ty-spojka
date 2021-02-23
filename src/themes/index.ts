import { DefaultTheme } from 'styled-components'

export const DarkTheme: DefaultTheme = {
	bg: {
		primary: '#2a2a2a' /* light gray */,
		secondary: '#242424' /* dark gray */,
	},
	text: {
		primary: '#ffffff' /* white */,
		secondary: '#fdd269' /* yellow */,
		link: '#7184c7' /* dark blue */,
	},
}

export const LightTheme: DefaultTheme = {
	bg: {
		primary: '#ffffff' /* white */,
		secondary: '#bccbff' /* light blue */,
	},
	text: {
		primary: '#000000' /* black */,
		secondary: '#fdd269' /* yellow */,
		link: '#7184c7' /* dark blue */,
	},
}
