import styled from 'styled-components'

export const Edit = styled.button`
	width: 2em;
	height: 2em;
	margin: 0.5em 1em;
	background-color: transparent;
	border: 0.02em solid ${({ theme }) => theme.text.primary};
	border-radius: 50%;
	outline: none;
	& > svg {
		color: ${({ theme }) => theme.text.primary};
		cursor: pointer;

		&:hover {
			color: ${({ theme }) => theme.text.secondary};
		}
	}
`
