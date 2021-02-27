import styled from 'styled-components'
import { FontSizes, MediaQueries } from '../../themes'

export const WrapperIcon = styled.div`
	width: 3.2em;
	height: 3.2em;
	margin: 0.3em;
`

export const ButtonTitle = styled.span`
	font-size: ${FontSizes.ButtonBig};
	text-transform: uppercase;

	@media (max-width: ${MediaQueries.Ipad}) {
		font-size: ${FontSizes.ButtonSmall};
	}
`

export const ButtonTitleSmall = styled.span`
	font-size: ${FontSizes.ButtonDefault};
	text-transform: uppercase;

	@media (max-width: ${MediaQueries.Ipad}) {
		font-size: ${FontSizes.ButtonSmall};
	}
`

export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0.6em 1em;

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
