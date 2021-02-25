import styled from 'styled-components'

export const GlobalWrapper = styled.article`
	display: flex;
	flex-flow: column nowrap;
	margin: 0 auto;
	max-width: 50%;

	@media (max-width: 65em) {
		max-width: 80%;
	}

	@media (max-width: 30em) {
		max-width: 95%;
	}
`
