import styled from 'styled-components'
import { ConnectWithoutContact } from '@styled-icons/material-rounded'
import { Link } from 'react-router-dom'

export const Wrapper = styled.header`
	display: grid;
	grid-template-columns: 1fr 1fr 4fr 1fr 1fr;
	justify-items: center;

	@media (max-width: 80em) {
		grid-template-columns: 1fr 4fr 1fr;
	}

	@media (max-width: 51em) {
		grid-template-columns: 1fr;
	}
`

export const Logo = styled(ConnectWithoutContact)`
	width: 10em;
	padding: 1em;
`

export const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.text.primary};
	grid-column: 2;

	@media (max-width: 80em) {
		grid-column: 1;
	}
`
