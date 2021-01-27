import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Svg from '../../assets/header.svg'

export const Wrapper = styled.header`
	background-image: url(${Svg});
	background-repeat: no-repeat;
	background-size: cover;
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	justify-items: center;
	align-content: start;
	height: 45em;
`

export const Title = styled(Link)`
	font-size: 3em;
	grid-column: 2;
	margin: 1em;
	text-decoration: none;
	color: ${({ theme }) => theme.bg.buttonBackground};
`
