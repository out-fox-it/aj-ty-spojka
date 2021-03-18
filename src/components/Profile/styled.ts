import styled, { css } from 'styled-components'
import { FontSizes, MediaQueries } from '../../themes'
import { Picture, Icon } from '../Avatar/styled'
import Button from '../Button'
import { StyledParagraph } from '../StyledText/StyledParagraph'
import { TitleH1, TitleH2 } from '../StyledText/StyledTitle'

export const ProfileContent = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 1.5em;

	@media (max-width: ${MediaQueries.Ipad}) {
		padding: 1em;
	}
`

export const ProfileName = styled(TitleH1)`
	display: flex;
	margin: 1em 0.5em 0 0.5em;
	justify-content: center;
	text-transform: none;
`

export const EmailAccount = styled.span`
	display: block;
	font-size: ${FontSizes.SizeDefault};
	text-align: center;
`

export const Description = styled(StyledParagraph)`
	white-space: pre-wrap;
	word-break: break-all;
	margin: 0;
`

export const Title = styled(TitleH2)`
	margin: 1em 0 0 0;
`

export const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;

	li {
		padding: 0.4em;
	}
`

export const Input = styled.input`
	box-sizing: border-box;
	width: 70%;
	padding: 0.7em;
	margin: 0.5em 1em 0.5em 0;
	border: 0.1em solid ${({ theme }) => theme.bg.secondary};
	border-radius: 0.8em;
	outline: none;

	@media (max-width: ${MediaQueries.Ipad}) {
		width: 100%;
	}
`

export const Edit = styled.button`
	width: 2.5em;
	height: 2.5em;
	margin-left: 1em;
	background-color: transparent;
	border: 0.02em solid ${({ theme }) => theme.text.primary};
	border-radius: 50%;
	outline: none;

	& > svg {
		color: ${({ theme }) => theme.text.primary};
		cursor: pointer;

		&:hover {
			color: ${({ theme }) => theme.text.secondary};
		}
	}
`

export const ProfileButton = styled(Button)`
	display: inline;
	width: 15em;
	margin: auto;

	@media (max-width: ${MediaQueries.Ipad}) {
		display: block;
	}
`

const SameStyles = css`
	margin: 0;
	padding: 0;
	align-self: flex-start;
	text-align: center;
`

export const ProfileHeader = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	margin: 0.7em;
	gap: 0.7em;

	& ${Picture}, ${Icon} {
		grid-row: 1 / 3;
		width: 12em;
		height: 12em;
		margin: auto;
	}

	& h1 {
		${SameStyles};
		align-self: flex-end;
	}

	& p {
		${SameStyles};
		align-self: flex-start;
	}

	@media (max-width: ${MediaQueries.Desktop}) {
		grid-template-columns: 1fr;

		& ${Picture}, ${Icon} {
			grid-row: 1 / 2;
		}
	}
`

export const PlaceholderText = styled.span`
	color: ${({ theme }) => theme.text.primary}80;
`
