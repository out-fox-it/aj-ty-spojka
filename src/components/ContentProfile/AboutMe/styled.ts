import styled from 'styled-components'

export const Description = styled.p`
text-align: justify;
`

export const EditDescription = styled.textarea`
	box-sizing: border-box;
	width: 100%;
	height: 12em;
	padding: 0.5em;
	border: 0.1em solid ${({ theme }) => theme.bg.secondary};
	border-radius: 0.8em;
	outline: none;
`
