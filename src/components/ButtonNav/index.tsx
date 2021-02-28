import React from 'react'
import { StyledButton, Wrapper, ButtonLink } from './styled'
import { UserEdit, Users } from '@styled-icons/fa-solid'
import { PermContactCalendar } from '@styled-icons/material-rounded'
import { Theme, useThemeControl } from '../Theme'

interface Props {
	login: boolean
}

const NavBeforeLogin = (theme: Theme): React.ReactElement => (
	<Wrapper>
		<ButtonLink to="/register">
			<StyledButton setColor={theme} icon={UserEdit} title="Registrace" />
		</ButtonLink>
		<ButtonLink to="/login">
			<StyledButton
				setColor={theme}
				icon={PermContactCalendar}
				title="Přihlášení"
			/>
		</ButtonLink>
	</Wrapper>
)

const NavAfterLogin = (theme: Theme): React.ReactElement => (
	<Wrapper>
		<ButtonLink to="/profile">
			<StyledButton setColor={theme} icon={UserEdit} title="Profil" />
		</ButtonLink>
		<ButtonLink to="/matching">
			<StyledButton setColor={theme} icon={Users} title="Matching" />
		</ButtonLink>
		<ButtonLink to="/contacts">
			<StyledButton
				setColor={theme}
				icon={PermContactCalendar}
				title="Kontakty"
			/>
		</ButtonLink>
	</Wrapper>
)

export const ButtonNav: React.FC<Props> = ({ login }) => {
	const [theme] = useThemeControl()

	// We use two different ways to pass the theme for learning purposes
	return login ? NavAfterLogin(theme) : NavBeforeLogin(theme)
}
