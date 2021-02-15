import styled from 'styled-components'
import { StyledButton } from '../Button/styled'

export const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 5fr 1fr;
	justify-items: center;
	justify-content: center;
`

export const MessageBoxTitle = styled.h1`
	grid-column: 2;
	font-size: 1.8rem;
	text-align: center;
	margin: 0;
	text-transform: uppercase;
	color: ${({ theme }) => theme.text.secondary};

	@media (max-width: 50em) {
		margin-bottom: 0.7em;
	}
`

export const MessageBoxBorder = styled.div`
	grid-column: 2;
	width: 80%;
	padding: 2em;
	margin: 2em;
	border: 0.1em solid ${({ theme }) => theme.bg.secondary};
	border-radius: 0.8em;

	@media (max-width: 80em) {
		width: 75%;
	}

	@media (max-width: 50em) {
		grid-template-columns: 1fr;
		width: 50%;
		padding-left: 0.5em;
		padding-right: 0.5em;
		padding-top: 1.5em;
		padding-bottom: 1.5em;
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
	border: 0.4em solid ${({ theme }) => theme.bg.secondary};
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
	height: 0.15em;
	background-color: #e9c46a;
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
