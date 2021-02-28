import { DefaultTheme } from 'styled-components'

export enum MediaQueries {
	DesktopLarge = '110em',
	Desktop = '80em',
	Ipad = '50em',
	Mobile = '30em',
}

export enum FontSizes {
	// Default Font Sizes
	SizeTitleH1 = '2rem',
	SizeTitleH2 = '1.5rem',
	SizeDefault = '1.2rem',
	SizeSmall = '0.9rem',

	// Clip Text Mask
	SizeClip = '3.7rem',

	// Button Font Sizes
	ButtonBig = '1.5rem',
	ButtonDefault = '1.2rem',
	ButtonSmall = '0.9rem',
}

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
		secondary: '#f4a936' /* yellow */,
		link: '#7184c7' /* dark blue */,
	},
}
