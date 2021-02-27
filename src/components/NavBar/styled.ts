import styled from 'styled-components'
import { MediaQueries } from '../../themes'
import { StyledLink } from '../Link'
import { Theme } from '../Theme'

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

type Props = {
	setColor: string
}

export const NavBarLink = styled(StyledLink)<Props>`
	color: ${({ setColor }) =>
		setColor === Theme.Light
			? ({ theme }) => theme.text.link
			: ({ theme }) => theme.text.secondary};
	grid-column: 2;
	padding: 2em;

	@media (max-width: ${MediaQueries.Desktop}) {
		grid-column: 1;
	}
`
