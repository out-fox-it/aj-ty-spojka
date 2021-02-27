import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const GlobalWrapper = styled.article`
	display: flex;
	flex-flow: column nowrap;
	margin: 0 auto;
	max-width: 50%;

	@media (max-width: ${MediaQueries.Ipad}) {
		max-width: 75%;
	}

	@media (max-width: ${MediaQueries.Mobile}) {
		max-width: 95%;
	}
`
