import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)<{ color?: string }>`
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	color: ${({ color, theme }) =>
		// TODO: Why is static string value here?
		color === 'darkBlue' ? theme.text.secondary : theme.text.link};
`
