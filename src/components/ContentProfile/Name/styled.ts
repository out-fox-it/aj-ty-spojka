import styled from 'styled-components'

export const ProfileName = styled.h1`
    display: flex;
    align-items: center;
`

export const EditName = styled.input`
    width: 70%;
    margin: 2.1em 0;
	padding: 0.7em;
    outline: none;
`

export const Edit = styled.button`
    width: 2em;
    height: 2em;
    margin: 0 1em;    
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
