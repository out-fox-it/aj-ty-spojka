import styled from 'styled-components'

export const Wrapper = styled.footer`
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	padding-top: 2em;
	padding-bottom: 2em;
	text-align: center;

	@media (max-width: 50em) {
		position: relative;
		padding-top: 1em;
		padding-bottom: 1em;
	}
`

export const FooterText = styled.p`
	color: ${({ theme }) => theme.text.primary};
`
