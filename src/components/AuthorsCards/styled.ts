import styled from 'styled-components'

export const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 3fr 3fr 1fr;
	grid-template-rows: auto;
	grid-gap: 1.5em;

	@media (max-width: 50em) {
		grid-template-columns: 1fr;
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
	grid-column: 2 / 4;
	font-size: 2em;
	text-align: center;

	@media (max-width: 50em) {
		grid-column: 1;
	}
`

type CardProps = {
	image: string
}

export const Card = styled.article<CardProps>`
	&:nth-child(n) {
		grid-column: 3 / 4;
	}

	&:nth-child(2n) {
		grid-column: 2 / 3;
	}

	position: relative;
	box-shadow: #00000070 0 4px 11px -1px, #00000070 0 4px 11px -1px inset;
	border: 2px solid #000;

	// Positioning magic
	height: 0;
	padding-top: 56.25%; // 16:9

	@media (max-width: 50em) {
		&:nth-child(n) {
			grid-column: 1;
		}

		&:nth-child(2n) {
			grid-column: 1;
		}
	}

	// Background Image styles
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-image: url(${({ image }) => image});

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
		border: 2px solid;
		border-image: conic-gradient(
				from var(--angle),
				black,
				${({ theme }) => theme.text.link}
			)
			1;
		animation: 7s rotate linear infinite;
	}
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
	color: white;
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
	background-color: ${({ theme }) => theme.bg.secondary};
	border-radius: 50%;
	width: 1em;
	padding: 0.5em;
	align-self: center;

	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.text.link};
	}
`
