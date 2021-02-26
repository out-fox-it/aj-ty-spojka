import styled from 'styled-components'
import { StyledButton } from '../Button/styled'
import { TitleH2 } from '../Title'

export const MessageBoxTitle = styled(TitleH2)`
	margin: 0;

	@media (max-width: 50em) {
		margin-bottom: 0.7em;
	}
`

export const MessageBoxBorder = styled.div`
	padding: 1em;
	margin-top: 1em;
	margin-bottom: 1em;
	border: 0.3em solid ${({ theme }) => theme.bg.secondary};
	border-radius: 0.8em;

	@media (max-width: 50em) {
		margin: 1em;
	}
`

export const MessageBox = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 50em) {
		flex-wrap: wrap;
	}
`

export const MessageAvatar = styled.div`
	border: 0.4em solid ${({ theme }) => theme.text.link};
	border-radius: 50%;
	width: 5vw;
	height: 5vw;

	@media (max-width: 50em) {
		width: 11vw;
		height: 11vw;
	}

	@media (max-width: 30em) {
		width: 17vw;
		height: 17vw;
	}
`

export const MessageBody = styled.p`
	margin: 2em;
	width: 70ch;

	@media (max-width: 80em) {
		margin: 1.5em;
		width: 60ch;
	}

	@media (max-width: 50em) {
		margin: 1em;
		width: 45ch;
	}
`

export const ButtonBox = styled.div`
	display: flex;
	flex-flow: column nowrap;
	row-gap: 1em;
`

export const MessageButton = styled(StyledButton)``

export const BreakLine = styled.hr`
	margin: 1.5em;
	height: 0.3em;
	background-color: ${({ theme }) => theme.bg.secondary};
	border-width: 0;
	border-radius: 50%;

	:last-child {
		display: none;
	}

	@media (max-width: 50em) {
		margin: 1em;
	}

	@media (max-width: 30em) {
		margin: 1.5em;
	}
`
