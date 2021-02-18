import styled from 'styled-components'
import Button from '../Button'

export const Wrapper = styled.main`
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	margin-top: 2em;

	@media (max-width: 80em) {
		grid-template-columns: 1fr 6fr 1fr;
	}
`

export const Center = styled.section`
	grid-column: 2;
	justify-content: center;
`

export const Space = styled.div`
	width: 100%;
	height: 2em;
`

export const Title = styled.h2``

export const StyledButton = styled(Button)`
	margin: auto;
`
