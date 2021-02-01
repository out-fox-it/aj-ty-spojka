import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		readonly bg: {
			readonly primary: string
			readonly secondary: string
			readonly buttonBackground: string
		}
		readonly text: {
			readonly primary: string
			readonly secondary: string
			readonly link: string
			readonly true: string
			readonly false: string
		}
	}
}
