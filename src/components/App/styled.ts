import { createGlobalStyle } from 'styled-components'

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
		
		@media (max-width: 50em) {
			padding-bottom: 5em;
		}
	}

	h1 {
		color: ${({ theme }) => theme.text.secondary};
		font-size: 2em;
		text-align: center;
	}
`
