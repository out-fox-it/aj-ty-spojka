import styled from 'styled-components'
import Toggle from '../Toggle'
import Svg from '../../assets/header.svg'

export const Wrapper = styled.header`
	align-content: start;
	background-image: url(${Svg});
	background-repeat: no-repeat;
	background-size: cover;
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	height: 45em;
	min-width: max-content;
	width: 100%;
`

export const Title = styled.h1`
	text-align: center;
	font-size: 3em;
	grid-column: 2;
	justify-self: center;
	margin: 1em;
`

// TOGGLE
export const StyledToggle = styled(Toggle)`
	justify-self: end;
	margin: 0 4em 0 0;
`
