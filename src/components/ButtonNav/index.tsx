import React from 'react'
import { StyledButton, Wrapper, StyledLink } from './styled'
import { UserEdit, Users } from '@styled-icons/fa-solid'
import { PermContactCalendar } from '@styled-icons/material-rounded'

interface Props {
	login: boolean
}

const NavBeforeLogin = (
	<Wrapper>
		<StyledLink to="/register">
			<StyledButton icon={UserEdit} title="Registrace" />
		</StyledLink>
		<StyledLink to="/login">
			<StyledButton icon={PermContactCalendar} title="Přihlášení" />
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
			<StyledButton icon={PermContactCalendar} title="Kontakty" />
		</StyledLink>
	</Wrapper>
)

export const ButtonNav: React.FC<Props> = ({ login }) =>
	login ? NavAfterLogin : NavBeforeLogin
