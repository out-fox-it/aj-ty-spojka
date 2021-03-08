import React from 'react'
import { StyledButton, Wrapper, ButtonLink } from './styled'
import {
	UserEdit,
	Users,
	UserPlus,
	UserLock,
	IdCard,
} from '@styled-icons/fa-solid'
import { Theme, useThemeControl } from '../Theme'
import { useUser } from '../User'

const NavBeforeLogin = (theme: Theme): React.ReactElement => (
	<Wrapper>
		<ButtonLink to="/register">
			<StyledButton color={theme} icon={UserPlus} title="Registrace" />
		</ButtonLink>
		<ButtonLink to="/login">
			<StyledButton color={theme} icon={UserLock} title="Přihlášení" />
		</ButtonLink>
	</Wrapper>
)

const NavAfterLogin = (theme: Theme): React.ReactElement => (
	<Wrapper>
		<ButtonLink to="/profile">
			<StyledButton color={theme} icon={UserEdit} title="Profil" />
		</ButtonLink>
		<ButtonLink to="/matching">
			<StyledButton color={theme} icon={Users} title="Matching" />
		</ButtonLink>
		<ButtonLink to="/contacts">
			<StyledButton color={theme} icon={IdCard} title="Kontakty" />
		</ButtonLink>
	</Wrapper>
)

export const ButtonNav: React.FC = () => {
	const [theme] = useThemeControl()
	const { isLoggedIn } = useUser()

	return isLoggedIn ? NavAfterLogin(theme) : NavBeforeLogin(theme)
}
