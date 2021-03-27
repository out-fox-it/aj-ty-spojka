import styled from 'styled-components'
import { FontSizes } from '../../../themes'

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
