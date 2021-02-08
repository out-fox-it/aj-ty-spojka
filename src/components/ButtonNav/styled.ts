import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button'

export const Wrapper = styled.nav`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2em;
	margin-top: -10em;
`

export const StyledButton = styled(Button)`
	width: 18em;
`

export const StyledLink = styled(Link)`
	text-decoration: none;
`
