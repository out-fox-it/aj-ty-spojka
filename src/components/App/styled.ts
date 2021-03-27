import { createGlobalStyle } from 'styled-components'
import { MediaQueries } from '../../themes'

export const GlobalStyles = createGlobalStyle`
	body {
		box-sizing: border-box;
		width: 100%;
		margin: 0 auto;
		background-color: ${({ theme }) => theme.bg.primary};

		// Font settings
		color: ${({ theme }) => theme.text.primary};
		font-family: -apple-system, BlinkMacSystemFont, 'TimesNewRoman',
			'Times New Roman', 'Times', 'Baskerville', 'Georgia', serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		@media (max-width: ${MediaQueries.Ipad}) {
			padding-bottom: 5em;
		}
	}

	button,
	input,
	text-area {
		font-family: -apple-system, BlinkMacSystemFont, 'TimesNewRoman',
			'Times New Roman', 'Times', 'Baskerville', 'Georgia', serif;
	}
`
