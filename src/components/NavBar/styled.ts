import styled from 'styled-components'
import { MediaQueries } from 'themes'

import { StyledLink } from 'components/StyledText'
import { Theme } from 'components/Theme'

export const Wrapper = styled.header`
	display: grid;
	grid-template-columns: 1fr 1fr 4fr 1fr 1fr;
	justify-items: center;
	background-color: ${({ theme }) => theme.bg.secondary};
	margin-bottom: 1em;

	@media (max-width: ${MediaQueries.Desktop}) {
		grid-template-columns: 1fr 4fr 1fr;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		grid-template-columns: 1fr;
		padding-bottom: 1.5em;
	}
`

export const NavBarLink = styled(StyledLink)<{ $theme: Theme }>`
	color: ${({ $theme, theme }) =>
		$theme === Theme.Light ? theme.text.link : theme.text.secondary};
	grid-column: 2;
	padding: 2em;

	@media (max-width: ${MediaQueries.Desktop}) {
		grid-column: 1;
	}
`
