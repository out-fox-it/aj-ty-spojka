import styled from 'styled-components'

export const StyledParagraph = styled.p`
	font-size: 1rem;
	line-height: 1.5em;
	text-align: left;
	color: ${({ theme }) => theme.text.primary};
`
