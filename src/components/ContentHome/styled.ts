import styled from 'styled-components'
import czechtech20191 from '../../assets/Home/czechtech2019-1.jpg'
import { MediaQueries } from '../../themes'
import { Theme } from '../Theme'

export const HomeSection = styled.section`
	display: flex;
	flex-flow: row nowrap;
	gap: 2em;
	margin-top: 1em;
	margin-bottom: 1em;

	@media (max-width: ${MediaQueries.Ipad}) {
		flex-flow: column wrap;
		justify-items: center;
		gap: 1em;
		padding: 1em;
		margin: 0 auto;
	}
`

export const HomeSectionMultipleItems = styled(HomeSection)`
	background-color: ${({ theme }) => theme.bg.secondary};
	padding: 2em;

	@media (max-width: ${MediaQueries.DesktopLarge}) {
		flex-wrap: wrap;
	}

	@media (max-width: ${MediaQueries.Mobile}) {
		padding: 1em;
		margin: 0 auto;
	}
`

export const HomeSubsection = styled.div``

export const HomeParagraph = styled.p`
	font-size: 1rem;
	line-height: 1.5em;
`

type Props = {
	setColor: string
}

export const HomeSubtitle = styled.p<Props>`
	color: ${({ setColor }) =>
		setColor === Theme.Dark
			? ({ theme }) => theme.text.secondary
			: ({ theme }) => theme.bg.primary};
	text-align: center;
	font-size: 0.9rem;
	margin: 0;
	font-weight: bold;
`

export const HomePictureClip = styled.div`
	font-size: 4rem;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	background-image: url(${czechtech20191});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 200% auto;

	@include background-clip(text);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: #7184c7b5;
`

export const HomePictureLeft = styled.img`
	width: 15em;
	height: 12em;
	border: 2px solid ${({ theme }) => theme.text.link};
	border-radius: 2em 2em 0 2em;
	object-fit: cover;
	align-self: center;
`

export const HomePictureRight = styled.img`
	width: 15em;
	height: 12em;
	border: 2px solid ${({ theme }) => theme.text.link};
	border-radius: 0 2em 2em 2em;
	object-fit: cover;
	align-self: center;
`
