import styled from 'styled-components'
import {StyledButton} from '../../../Button/styled'

export const Form = styled.form``

export const Input = styled.input`
    box-sizing: border-box;
    width: 70%;
    padding: 0.7em;
    margin: 1em 0;
    border: 0.1em solid ${({ theme }) => theme.bg.secondary};
	border-radius: 0.8em;
	outline: none;

    @media (max-width: 50em) {
		width: 100%;
	}

`
export const Button = styled(StyledButton)`
    display: inline;
    width: 10em;
    margin-left: 1em;

@media (max-width: 50em) {
    display: block;
    margin: auto;
	}
`
