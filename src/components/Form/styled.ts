import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton } from '../Button/styled'

export const Form = styled.form`
	display: grid;
	grid-template-columns: 3fr 1fr 3fr 3fr;

	@media (max-width: 75em) {
		grid-template-columns: 1fr 5fr 1fr;
	}
`

export const FormTitle = styled.h1`
	grid-column: 2 / 4;
	font-size: 2em;
	text-align: center;

	@media (max-width: 75em) {
		grid-column: 2;
	}
`

export const FormItem = styled.div`
	grid-column: 2 / 4;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 75em) {
		grid-column: 2;
	}
`

export const FormInput = styled.input`
	position: relative;
	margin: 1em;
	padding: 0.7em;
	min-width: 45%;
	max-width: 100%;

	&:focus {
		outline: none;
	}

	@media (min-width: 80em) {
		min-width: 60%;
	}

	@media (min-width: 79em) {
		min-width: 50%;
	}

	@media (min-width: 50em) {
		min-width: 60%;
	}

	@media (max-width: 30em) {
		max-width: 50%;
	}
`

export const FormCheck = styled.input`
	margin: 1.5em;
	padding: 0.5em;
	transform: scale(1.5);
`

export const FormLink = styled(Link)`
	color: ${({ theme }) => theme.text.primary};
	grid-column: 2 / 4;
	text-decoration: none;
	text-align: center;
	margin: 1em;

	@media (max-width: 75em) {
		grid-column: 2;
	}
`

export const FormButton = styled(StyledButton)`
	margin: 1em;
	flex-grow: 1;
`

export const Label = styled.label`
	margin: 1em;
`

export const Errors = styled.span`
	grid-column: 2 / 4;
	margin: 0;
	text-align: center;
	color: ${({ theme }) => theme.text.secondary};

	@media (max-width: 75em) {
		grid-column: 2;
	}
`

export const FormIcon = styled.div`
	color: ${({ theme }) => theme.bg.secondary};
	width: 1.4em;
	align-self: center;
	margin-left: -3em;
	z-index: 1;

	&:hover {
		cursor: pointer;
	}
`
