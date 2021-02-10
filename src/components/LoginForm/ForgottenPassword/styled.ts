import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FormLink = styled(Link)`
	color: ${({ theme }) => theme.text.primary};
	text-decoration: none;
	text-align: center;
	margin: 1em;
`
