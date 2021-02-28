import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
	changeColor?: string
}

export const StyledLink = styled(Link)<Props>`
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	color: ${({ changeColor }) =>
		changeColor === 'darkBlue'
			? ({ theme }) => theme.text.secondary
			: ({ theme }) => theme.text.link}; // Default Link color
`
