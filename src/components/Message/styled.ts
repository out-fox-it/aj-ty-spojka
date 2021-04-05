import styled from 'styled-components'
import { FontSizes, MediaQueries } from 'themes'

import { StyledButton } from 'components/Button/styled'
import { StyledParagraph } from 'components/StyledText/StyledParagraph'
import { TitleH2 } from 'components/StyledText/StyledTitle'

export const MessageBoxTitle = styled(TitleH2)`
	margin: 0;

	@media (max-width: ${MediaQueries.Ipad}) {
		margin-bottom: 0.7em;
	}
`

export const MessageBoxBorder = styled.div`
	padding: 2em 1.5em 0.5em 1.5em;
	margin-top: 1em;
	margin-bottom: 1em;
	border: 0.3em solid ${({ theme }) => theme.bg.secondary};
	border-radius: 0.8em;

	@media (max-width: ${MediaQueries.Ipad}) {
		padding: 2em 1.5em 1.7em 1.5em;
		margin: 1em;
	}
`

export const MessageBox = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;

	@media (max-width: ${MediaQueries.Ipad}) {
		flex-wrap: wrap;
	}
`

export const MessageAvatar = styled.div`
	border: 0.4em solid ${({ theme }) => theme.text.link};
	border-radius: 50%;
	width: 4vw;
	height: 4vw;
	min-width: 4vw;

	@media (max-width: ${MediaQueries.Ipad}) {
		width: 11vw;
		height: 11vw;
	}

	@media (max-width: ${MediaQueries.Mobile}) {
		width: 17vw;
		height: 17vw;
	}
`

export const MessageBody = styled(StyledParagraph)`
	margin: 2em;
	width: 70ch;

	@media (max-width: ${MediaQueries.Desktop}) {
		margin: 1.5em;
		width: 60ch;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		margin: 1em;
		width: 45ch;
	}
`

export const ButtonBox = styled.div`
	display: flex;
	flex-flow: column nowrap;
	row-gap: 1em;
`

export const MessageButton = styled(StyledButton)`
	font-size: ${FontSizes.ButtonSmall};
`

export const BreakLine = styled.hr`
	height: 0.3em;
	background-color: ${({ theme }) => theme.bg.secondary};
	border-width: 0;
	border-radius: 50%;

	:last-child {
		display: none;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		margin: 1.5em;
	}

	@media (max-width: ${MediaQueries.Mobile}) {
		margin: 2em;
	}
`
