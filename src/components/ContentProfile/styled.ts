import styled from 'styled-components'
import Button from '../Button'

export const Wrapper = styled.div`
	background-color: red;
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	margin-top: 2em;
`

export const Center = styled.section`
	background-color: green;
	grid-column: 2;
`

export const Space = styled.div`
	width: 100%;
	height: 2em;
`

export const Name = styled.h1``

export const Title = styled.h2``

export const TextArea = styled.p``

export const SocialNetwork = styled.span`
	display: block;
`

export const StyledButton = styled(Button)``
