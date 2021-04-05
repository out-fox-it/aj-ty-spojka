import styled from 'styled-components'
import { FontSizes } from 'themes'

export const StyledParagraph = styled.p`
	font-size: ${FontSizes.SizeDefault};
	line-height: 1.5em;
	color: ${({ theme }) => theme.text.primary};
`
