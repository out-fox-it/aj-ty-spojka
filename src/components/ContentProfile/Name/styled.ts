import styled from 'styled-components'

export const ProfileName = styled.h1`
	display: flex;
	align-items: center;
	margin: 1em 0 0.3em 0;
	justify-content: center;
`

export const EditName = styled.input`
	box-sizing: border-box;
	margin: 2.1em 0;
	padding: 0.7em;
    width: 70%;
    border: 0.1em solid ${({ theme }) => theme.bg.secondary};
	border-radius: 0.8em;
	outline: none;
`
