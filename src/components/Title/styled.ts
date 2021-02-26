import styled from 'styled-components'

type Props = {
	changeColor?: string
}

export const TitleH1 = styled.h1<Props>`
	font-size: 2rem;
	text-align: center;
	text-transform: uppercase;
	color: ${({ changeColor }) =>
		changeColor === 'darkBlue'
			? ({ theme }) => theme.text.link // Dark blue color
			: ({ theme }) => theme.text.secondary}; // Default yellow color
`

export const TitleH2 = styled.h2`
	font-size: 1.5rem;
	text-align: center;
	text-transform: uppercase;
	color: ${({ theme }) => theme.text.secondary};
`
