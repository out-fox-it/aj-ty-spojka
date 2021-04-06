import styled from 'styled-components'
import { MediaQueries } from 'themes'

import Button from 'components/Button'
import { StyledLink } from 'components/StyledText'
import { Theme } from 'components/Theme'

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

export const StyledButton = styled(Button)<{ $theme: Theme }>`
	width: 100%;
	height: 100%;

	@media (min-width: ${MediaQueries.Ipad}) {
		border: none;

		&:hover {
			background-color: ${({ theme }) => theme.bg.secondary};
			color: ${({ $theme, theme }) =>
				$theme === Theme.Dark ? theme.text.link : theme.bg.primary};
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
