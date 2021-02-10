import styled from 'styled-components'

export const WrapperIcon = styled.div`
	width: 3.2em;
	height: 3.2em;
	margin: 0.3em;
`

export const ButtonTitle = styled.span`
	font-size: 1.5em;
	text-transform: uppercase;

	@media (max-width: 50em) {
		font-size: 1em;
	}
`

export const ButtonTitleSmall = styled.span`
	font-size: 1em;
	text-transform: uppercase;

	@media (max-width: 51em) {
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
	color: ${({ theme }) => theme.text.secondary};
	background-color: ${({ theme }) => theme.bg.buttonBackground};
	cursor: pointer;

	border: 0.1em solid ${({ theme }) => theme.bg.secondary};
	border-radius: 0.8em;
	outline: none;

	&:hover {
		color: ${({ theme }) => theme.bg.primary};
		background-color: ${({ theme }) => theme.text.secondary};
	}
`
