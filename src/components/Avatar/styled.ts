import styled from 'styled-components'
import { UserCircle } from '@styled-icons/fa-solid'

export const Picture = styled.img`
	display: flex;
	border: 0.4em solid ${({ theme }) => theme.text.primary};
	border-radius: 50%;
	object-fit: cover;
`

export const Icon = styled(UserCircle)`
	background-color: ${({ theme }) => theme.bg.primary};
`
