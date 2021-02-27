import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.footer`
	bottom: 0;
	right: 0;
	left: 0;
	padding-top: 1em;
	padding-bottom: 1em;
	text-align: center;
	z-index: -1; // Otherwise absolute position overlaps menu!

	@media (max-width: ${MediaQueries.Ipad}) {
		position: relative;
		padding-top: 1em;
		padding-bottom: 1em;
	}
`

export const FooterText = styled.p`
	color: ${({ theme }) => theme.text.primary};
`
