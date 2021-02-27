import styled from 'styled-components'
import { MediaQueries } from '../../themes'
import Button from '../Button'
import { StyledLink } from '../Link'
import { Theme } from '../Theme'

export const Wrapper = styled.nav`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-around;
	align-content: center;

	@media (max-width: ${MediaQueries.Ipad}) {
		position: fixed;
		bottom: 0;
		z-index: 999;
	}
`

type Props = {
	setColor: string
}

export const StyledButton = styled(Button)<Props>`
	width: 100%;
	height: 100%;

	@media (min-width: ${MediaQueries.Ipad}) {
		border: none;

		&:hover {
			background-color: ${({ theme }) => theme.bg.secondary};
			color: ${({ setColor }) =>
				setColor === Theme.Dark
					? ({ theme }) => theme.text.link
					: ({ theme }) => theme.bg.primary};
		}
	}
`

export const ButtonLink = styled(StyledLink)`
	width: 25%;

	@media (max-width: ${MediaQueries.Ipad}) {
		flex: 1;
		height: 6em;
		& > button {
			border-radius: 0;
		}
	}
`
