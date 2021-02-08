import styled from 'styled-components'

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr 0.5fr 1fr;
	gap: 2em;
	justify-items: center;

	@media (max-width: 50em) {
		grid-template-columns: 1fr 5fr 1fr;
		grid-template-rows: auto auto;
	}
`

export const WrapperInformation = styled.section`
	grid-column: 2;
	margin-bottom: 1em;

	& h2 {
		color: ${({ theme }) => theme.text.secondary};
	}

	& p {
		margin-bottom: 3em;
	}

	@media (max-width: 50em) {
		grid-column: 2;
		grid-row: 1;
	}
`

export const StyledIcon = styled.article`
	display: inline-block;

	& svg {
		width: 1em;
		padding: 0 0.5em;
	}
`

export const WrapperLabel = styled.section`
	grid-column: 3;
	text-align: center;

	@media (max-width: 50em) {
		grid-column: 2;
		grid-row: 2;
	}
`

export const StyledButton = styled.article`
	display: grid;
	gap: 1em;
	justify-content: center;
`
