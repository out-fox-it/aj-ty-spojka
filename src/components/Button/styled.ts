import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const WrapperIcon = styled.div`
	width: 3.2em;
	height: 3.2em;
	margin: 0.3em;
`

export const ButtonTitle = styled.span`
	font-size: 1.5em;
	text-transform: uppercase;

	@media (max-width: ${MediaQueries.Ipad}) {
		font-size: 1em;
	}
`

export const ButtonTitleSmall = styled.span`
	font-size: 1em;
	text-transform: uppercase;

	@media (max-width: ${MediaQueries.Ipad}) {
		font-size: 0.7em;
	}
`

export const ButtonSubtitle = styled.p`
	font-size: 0.7em;
`

export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0.6em 1em;

	font-family: Verdana, Geneva, Tahoma, sans-serif;
	color: ${({ theme }) => theme.text.primary};
	background-color: ${({ theme }) => theme.bg.secondary};
	cursor: pointer;

	border: 0.1em solid ${({ theme }) => theme.text.link};
	border-radius: 0.8em;
	outline: none;

	&:hover {
		background-color: ${({ theme }) => theme.text.link};
		color: ${({ theme }) => theme.text.primary};
	}
`
