import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontSizes } from 'themes'

export const StyledLink = styled(Link)<{ color?: string }>`
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	color: ${({ color, theme }) =>
		// TODO: Why is static string value here?
		color === 'darkBlue' ? theme.text.secondary : theme.text.link};
`

export const StyledParagraph = styled.p`
	font-size: ${FontSizes.SizeDefault};
	line-height: 1.5em;
	color: ${({ theme }) => theme.text.primary};
`

export const TitleH1 = styled.h1<{ color?: string }>`
	font-size: ${FontSizes.SizeTitleH1};
	text-align: center;
	text-transform: uppercase;
	color: ${({ color, theme }) =>
		// TODO: Why is static string value here?
		color === 'darkBlue' ? theme.text.link : theme.text.secondary};
`

export const TitleH2 = styled.h2`
	font-size: ${FontSizes.SizeTitleH2};
	text-align: center;
	text-transform: uppercase;
	color: ${({ theme }) => theme.text.secondary};
`
