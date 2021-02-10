import styled from 'styled-components'

export const Account = styled.span`
	display: flex;
	align-items: center;
`

export const EditAccount = styled.input`
	width: 70%;
	margin: 2.1em 0;
	padding: 0.7em;
	outline: none;
`

export const HiddenIcon = styled.div`
display: ${(props) => (props?.hidden ? 'none' : 'block')};`
