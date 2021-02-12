import styled from 'styled-components'

export const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 5fr 1fr;
	justify-items: center;
	justify-content: center;
`

export const MessageBoxTitle = styled.h1`
	grid-column: 2;
	font-size: 2em;
	text-align: center;
	margin: 0;
`

export const MessageBox = styled.div`
	grid-column: 2;
	width: 80%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
	padding: 2em;
	margin: 2em;
	border: 0.1em solid ${({ theme }) => theme.bg.secondary};
	border-radius: 0.8em;

	@media (max-width: 80em) {
		width: 75%;
	}

	@media (max-width: 50em) {
		grid-template-columns: 1fr;
		flex-wrap: wrap;
		width: 50%;
		padding-left: 0.5em;
		padding-right: 0.5em;
		padding-top: 1.5em;
		padding-bottom: 1.5em;
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

export const ReadMore = styled.span`
	color: ${({ theme }) => theme.text.secondary};
	margin-left: 0.5em;
	text-decoration: underline;
	cursor: pointer;
`

export const MessageButton = styled.button`
	background-color: ${({ theme }) => theme.bg.secondary};
	background-color: #2a9d8f;
	width: 6vw;
	height: 6vw;
	border-radius: 50%;
	border: none;

	@media (max-width: 50em) {
		width: 12vw;
		height: 12vw;
	}

	@media (max-width: 30em) {
		width: 18vw;
		height: 18vw;
	}
`
