import styled from 'styled-components'
import czechtech20191 from '../../assets/Home/czechtech2019-1.jpg'

export const Wrapper = styled.article`
	display: grid;
	grid-template-columns: 1fr 6fr 1fr;
	margin: 1em;
	justify-items: center;

	@media (max-width: 50em) {
		margin: 0;
		padding-top: 3em;
		padding-bottom: 1em;
	}
`

export const HomeSection = styled.section`
	grid-column: 2;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	gap: 2em;
	max-width: 60em;
	margin: 1em;

	@media (max-width: 50em) {
		flex-flow: column wrap;
		justify-items: center;
		gap: 1em;
	}
`

export const HomeSectionMultipleItems = styled(HomeSection)`
	background-color: ${({ theme }) => theme.bg.secondary};
	padding: 2em;

	@media (max-width: 110em) {
		flex-wrap: wrap;
	}

	@media (max-width: 30em) {
		padding: 1em;
		margin: 0 auto;
	}
`

export const HomeSubsection = styled.div``

export const HomeParagraph = styled.p`
	font-size: 1rem;
	line-height: 1.5em;
`

// TODO: If theme is light theme, HomeSubtitle should have different color
export const HomeSubtitle = styled.p`
	color: ${({ theme }) => theme.text.secondary};
	text-align: center;
	font-size: 1rem;
	margin: 0;
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
`

export const HomePictureRight = styled.img`
	width: 15em;
	height: 12em;
	border: 2px solid ${({ theme }) => theme.text.link};
	border-radius: 0 2em 2em 2em;
	object-fit: cover;
`