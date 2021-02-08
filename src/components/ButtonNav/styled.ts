import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button'

export const Wrapper = styled.nav`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-around;
	align-content: center;

	@media (max-width: 51em) {
		position: absolute;
		bottom: 0;
	}
`

export const StyledButton = styled(Button)`
	width: 100%;
	height: 100%;
`

export const StyledLink = styled(Link)`
	text-decoration: none;
	width: 25%;

	@media (max-width: 51em) {
		flex: 1;
		& > button {
			border-radius: 0;
		}
	}
`
