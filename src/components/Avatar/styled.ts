import styled, { css } from 'styled-components'
import { UserCircle } from '@styled-icons/fa-solid'

const border = css`
	border: 0.2em solid ${({ theme }) => theme.text.primary};
	border-radius: 50%;
`

export const Picture = styled.img`
	${border};
	background-position: center;
	background-size: cover;
`

export const Icon = styled(UserCircle)`
	${border};
	background-color: ${({ theme }) => theme.bg.primary};
`
