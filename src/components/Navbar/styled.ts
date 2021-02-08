import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.nav`
	display: flex;
	justify-content: center;
`

export const List = styled.ul`
	display: flex;
	list-style-type: none;
	align-items: center;
	margin: 0;
	padding: 0;
`

export const NavLink = styled(Link)`
	display: block;
	padding: 1.5em 2em;
	text-decoration: none;
	color: ${({ theme }) => theme.text.primary};

	&:hover {
		color: ${({ theme }) => theme.text.secondary};
	}
`
