import styled from 'styled-components'

export const Edit = styled.button`
	width: 2.5em;
	height: 2.5em;
	margin: 0.5em;
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
