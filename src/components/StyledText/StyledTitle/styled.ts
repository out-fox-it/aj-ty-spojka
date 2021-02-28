import styled from 'styled-components'
import { FontSizes } from '../../../themes'

type Props = {
	changeColor?: string
}

export const TitleH1 = styled.h1<Props>`
	font-size: ${FontSizes.SizeTitleH1};
	text-align: center;
	text-transform: uppercase;
	color: ${({ changeColor }) =>
		changeColor === 'darkBlue'
			? ({ theme }) => theme.text.link
			: ({ theme }) => theme.text.secondary}; // Default Title color
`

export const TitleH2 = styled.h2`
	font-size: ${FontSizes.SizeTitleH2};
	text-align: center;
	text-transform: uppercase;
	color: ${({ theme }) => theme.text.secondary};
`
