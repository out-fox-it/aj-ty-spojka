import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const HomeSection = styled.section`
	display: flex;
	flex-flow: row nowrap;
	gap: 2em;
	margin-top: 1em;
	margin-bottom: 1em;

	@media (max-width: ${MediaQueries.Desktop}) {
		flex-flow: column wrap;
		justify-items: center;
		gap: 1em;
		padding: 1em;
		margin: 0 auto;
	}
`

export const HomePicture = styled.img<{ borderRadius: string }>`
	width: 15em;
	height: 12em;
	border: 2px solid ${({ theme }) => theme.text.link};
	border-radius: ${({ borderRadius }) => borderRadius};
	object-fit: cover;
	align-self: center;
`
