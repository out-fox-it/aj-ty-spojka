import styled from 'styled-components'
import { withAlphaHex } from 'with-alpha-hex'

export const Form = styled.form`
	display: flex;
	flex-flow: column wrap;
	align-content: center;
	margin: 2em;
`

export const FormItem = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
`

export const FormInput = styled.input`
	margin: 1em;
	padding: 0.7em;

	&:focus {
		outline: none;
	}
`

export const FormCheck = styled.input`
	margin: 1.5em;
	padding: 0.5em;
	transform: scale(1.5);
`

export const FormButton = styled.button`
	margin: 1em;
	padding: 0.5em;
	flex-grow: 1;

	color: ${({ theme }) => theme.text.secondary};
	background-color: ${({ theme }) =>
		withAlphaHex(theme.bg.buttonBackground, 0.5)};
	cursor: pointer;

	border: 0.1em solid ${({ theme }) => withAlphaHex(theme.bg.secondary, 0.5)};
	border-radius: 0.8em;

	&:hover {
		color: ${({ theme }) => theme.bg.primary};
		background-color: ${({ theme }) =>
			withAlphaHex(theme.text.secondary, 0.7)};
	}
`

export const Label = styled.label`
	margin: 1em;
`

export const Errors = styled.span`
	margin: 0;
	text-align: center;
	color: ${({ theme }) => theme.text.false};
`

export const HiddenError = styled.span`
	display: none;
	margin: 0;
`
