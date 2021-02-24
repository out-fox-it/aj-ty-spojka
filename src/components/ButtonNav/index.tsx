import React from 'react'
import { StyledButton, Wrapper, StyledLink } from './styled'
import {
	UserEdit,
	Users,
	UserPlus,
	UserLock,
	IdCard,
} from '@styled-icons/fa-solid'

interface Props {
	login: boolean
}

const NavBeforeLogin = (
	<Wrapper>
		<StyledLink to="/register">
			<StyledButton icon={UserPlus} title="Registrace" />
		</StyledLink>
		<StyledLink to="/login">
			<StyledButton icon={UserLock} title="Přihlášení" />
		</StyledLink>
	</Wrapper>
)

const NavAfterLogin = (
	<Wrapper>
		<StyledLink to="/profile">
			<StyledButton icon={UserEdit} title="Můj profil" />
		</StyledLink>
		<StyledLink to="/matching">
			<StyledButton icon={Users} title="Matching" />
		</StyledLink>
		<StyledLink to="/contacts">
			<StyledButton icon={IdCard} title="Kontakty" />
		</StyledLink>
	</Wrapper>
)

export const ButtonNav: React.FC<Props> = ({ login }) =>
	login ? NavAfterLogin : NavBeforeLogin
