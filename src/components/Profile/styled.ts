import styled from 'styled-components'
import Button from '../Button'

export const ProfileContent = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 1.5em;
`

export const ProfileName = styled.h1`
	display: flex;
	align-items: center;
	margin: 1em 0 0 0;
	justify-content: center;
`

export const EmailAccount = styled.span`
	display: block;
	font-size: 1.4em;
	text-align: center;
`

export const Description = styled.pre`
	text-align: justify;
	white-space: pre-wrap;
	word-break: break-all;
	margin: 0;
`

export const Title = styled.h2`
	margin: 1em 0 0 0;
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

export const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;

	li {
		padding: 0.4em;
	}
`

export const Input = styled.input`
	box-sizing: border-box;
	width: 70%;
	padding: 0.7em;
	margin: 0.5em 1em 0.5em 0;
	border: 0.1em solid ${({ theme }) => theme.bg.secondary};
	border-radius: 0.8em;
	outline: none;

	@media (max-width: 50em) {
		width: 100%;
	}
`

export const Edit = styled.button`
	width: 2.5em;
	height: 2.5em;
	margin-left: 1em;
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

export const ProfileButton = styled(Button)`
	display: inline;
	width: 12.5em;
	margin: auto;

	@media (max-width: 50em) {
		display: block;
	}
`
