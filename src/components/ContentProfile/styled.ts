import styled from 'styled-components'
import Button from '../Button'

export const Wrapper = styled.main`
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	margin-top: 2em;
`

export const Center = styled.section`
	grid-column: 2;
`

export const Space = styled.div`
	width: 100%;
	height: 2em;
`

export const NameEdit = styled.input``

export const Title = styled.h2``

export const TextArea = styled.p``

export const SocialNetwork = styled.span`
	display: block;
`

export const StyledButton = styled(Button)``

export const Edit = styled.div`
	display: inline;
	& > svg {
		width: 1.2em;
		padding: 0.4em;
		color: ${({ theme }) => theme.text.primary};
		cursor: pointer;

		&:hover {
			color: ${({ theme }) => theme.text.secondary};
		}
	}
`
