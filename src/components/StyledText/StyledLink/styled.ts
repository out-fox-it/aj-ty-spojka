import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
	color?: string
}

export const StyledLink = styled(Link)<Props>`
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	color: ${({ color }) =>
		color === 'darkBlue'
			? ({ theme }) => theme.text.secondary
			: ({ theme }) => theme.text.link}; // Default Link color
`
