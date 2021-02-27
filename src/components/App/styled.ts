import { createGlobalStyle } from 'styled-components'
import { MediaQueries } from '../../themes'

export const GlobalStyles = createGlobalStyle`
	body {
		box-sizing: border-box;
		width: 100%;
		margin: 0 auto;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
			'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
			'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: ${({ theme }) => theme.text.primary};
		background-color: ${({ theme }) => theme.bg.primary};
		
		@media (max-width: ${MediaQueries.Ipad}) {
			padding-bottom: 5em;
		}
	}
`
