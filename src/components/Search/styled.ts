import styled from 'styled-components'
import { Search } from '@styled-icons/fa-solid'

import FormText from 'components/Form/components/FormText'

export const SearchBox = styled(FormText)`
	border: 0.2em solid ${({ theme }) => theme.text.link};
	padding-left: 3.5em;
	box-sizing: border-box;
`

export const SearchIcon = styled(Search)`
	color: ${({ theme }) => theme.text.link};
	width: 1.3em;
	align-self: center;
	margin-right: -2.1em;
	z-index: 1;
`
