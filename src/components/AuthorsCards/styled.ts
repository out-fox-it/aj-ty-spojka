import styled from 'styled-components'

// AuthorsCards images
import jindrichmaca from '../../assets/AuthorsCards/jindrichmaca.jpg'
import janachaloupkova from '../../assets/AuthorsCards/janachaloupkova.jpg'
import martinavilimova from '../../assets/AuthorsCards/martinavilimova.jpeg'
import tomashampl from '../../assets/AuthorsCards/tomashampl.jpg'

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

const Card = styled.article`
	position: relative;
	box-shadow: #00000070 0 4px 11px -1px, #00000070 0 4px 11px -1px inset;
	border: 1px solid black;

	// Positioning magic
	height: 0;
	padding-top: 56.25%; // 16:9

	// Background Image styles
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	// Border animation effect on hover
	@property --angle {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}

	@keyframes rotate {
		from {
			--angle: 0deg;
		}
		to {
			--angle: 360deg;
		}
	}

	&:hover {
		border: 1px solid;
		border-image: conic-gradient(
				from var(--angle),
				black,
				${({ theme }) => theme.text.secondary}
			)
			1;
		animation: 7s rotate linear infinite;
	}
`

// Jindřich Máca
export const Card1 = styled(Card)`
	grid-area: card1;
	background-image: url(${jindrichmaca});
`

// Jana Chaloupková
export const Card2 = styled(Card)`
	grid-area: card2;
	background-image: url(${janachaloupkova});
`

// Martina Vilímová
export const Card3 = styled(Card)`
	grid-area: card3;
	background-image: url(${martinavilimova});
`

// Tomáš Hampl
export const Card4 = styled(Card)`
	grid-area: card4;
	background-image: url(${tomashampl});
`

export const CardContent = styled.section`
	position: absolute;
	display: flex;
	justify-content: center;
	justify-content: space-between;
	top: 0;
	height: 100%;
	width: 100%;
	flex-direction: column;
`

export const CardText = styled.div`
	text-align: center;
`

export const CardTitle = styled.h2`
	color: ${({ theme }) => theme.text.secondary};
	text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
		-1px 1px 0 #000, 1px 1px 0 #000;
	margin-bottom: 0;
`

export const CardSubtitle = styled.span`
	text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
		-1px 1px 0 #000, 1px 1px 0 #000;

	@media (max-width: 80em) {
		display: none;
	}
`

export const IconBar = styled.div`
	display: flex;
	flex-flow: row nowrap;
	margin: 1em;
	align-self: center;
	gap: 0.5em;
`

export const CardIcon = styled.a`
	color: ${({ theme }) => theme.text.primary};
	background: ${({ theme }) => theme.bg.secondary};
	border: 1px solid ${({ theme }) => theme.bg.secondary};
	border-radius: 50%;
	width: 1em;
	padding: 0.5em;
	align-self: center;

	&:hover {
		cursor: pointer;
	}
`
