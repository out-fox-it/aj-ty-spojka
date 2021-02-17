import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.header`
	display: grid;
	grid-template-columns: 1fr 1fr 4fr 1fr 1fr;
	justify-items: center;

	@media (max-width: 80em) {
		grid-template-columns: 1fr 4fr 1fr;
	}

	@media (max-width: 50em) {
		grid-template-columns: 1fr;
	}
`

export const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.text.primary};
	grid-column: 2;
	padding: 2em;

	@media (max-width: 80em) {
		grid-column: 1;
	}
`
