import styled, { css } from 'styled-components'
import { User } from '@styled-icons/entypo/User'

const border = css`
	border: 0.2em solid ${({ theme }) => theme.text.primary};
	border-radius: 50%;
`

export const Picture = styled.img`
	${border};
	background-position: center;
	background-size: cover;
`

export const Icon = styled(User)`
	background-color: ${({ theme }) => theme.bg.buttonBackground};
	${border};
`
