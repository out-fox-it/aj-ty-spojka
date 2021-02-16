import styled from 'styled-components'

export const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 2fr 3fr 3fr 2fr;
	grid-gap: 1.5em;
	grid-template-areas:
		'. title title .'
		'. card1 card2 .'
		'. card3 card4 .';
	justify-content: stretch;

	@media (max-width: 50em) {
		grid-template-columns: 1fr;
		grid-template-areas:
			'title'
			'card1'
			'card2'
			'card3'
			'card4';
		margin: 2em;
		grid-gap: 2em;
		padding: 1.5em;
	}

	@media (max-width: 30em) {
		margin: 0.5em;
		grid-gap: 1em;
		padding: 0.5em;
	}
`

export const AuthorsTitle = styled.h1`
	grid-area: title;
	font-size: 2em;
	text-align: center;

	@media (max-width: 50em) {
		grid-column: 1;
	}
`

export const Card = styled.div`
	border-radius: 0.8em;

	// Positioning magic
	display: inline-grid;
	overflow: hidden;
	height: 0;
	padding-top: 56.25%;

	// Background Image styles
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`

export const CardContent = styled.div`
	position: absolute;
	width: fit-content;
	height: fit-content;
	z-index: -1; // Otherwise absolute position overlaps menu!
`

export const Card1 = styled(Card)`
	grid-area: card1;
	background-image: url('https://files3.uloziste.com/cba70a4a1100133c/profile.jpg');
`
export const Card2 = styled(Card)`
	grid-area: card2;
	background-image: url('https://files3.uloziste.com/cba70a4a1100133c/profile.jpg');
`
export const Card3 = styled(Card)`
	grid-area: card3;
	background-image: url('https://files3.uloziste.com/cba70a4a1100133c/profile.jpg');
`
export const Card4 = styled(Card)`
	grid-area: card4;
	background-image: url('https://files3.uloziste.com/cba70a4a1100133c/profile.jpg');
`
