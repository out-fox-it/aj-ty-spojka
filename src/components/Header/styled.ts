import styled from 'styled-components'
import Toggle from '../Toggle'

export const Wrapper = styled.header`
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	margin: 1em 0;
`

export const Title = styled.h1`
	text-align: center;
	font-size: 5em;
	grid-column: 2;
	justify-self: center;
	margin: 0;
`

export const StyledToggle = styled(Toggle)`
	justify-self: end;
	margin: 0 1em;
`
