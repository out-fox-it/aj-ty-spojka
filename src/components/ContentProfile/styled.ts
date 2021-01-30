import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const WrapperCenter = styled.div`
	max-width: 75em;
	width: 100%;
	margin: 0 2em;
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	gap: 3em;
	width: 100%;
	@media (max-width: 50em) {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto auto auto;
		position: relative;
		top: 12.1em;
	}
`

export const WrapperContent = styled.div`
	grid-column: 2;
	@media (max-width: 50em) {
		grid-column: 1;
		margin: 0 2em;
	}
`

export const StyledIcon = styled.div`
	display: inline-block;
	& svg {
		width: 1em;
		padding: 0 0.5em;
	}
`

export const WrapperLabel = styled.div`
	text-align: center;
`

export const WrapperInformation = styled.div`
	margin-bottom: 3em;
	& h2 {
		color: ${({ theme }) => theme.text.secondary};
	}
`

export const StyledButton = styled.div`
	display: grid;
	gap: 1em;
	justify-content: center;
`
