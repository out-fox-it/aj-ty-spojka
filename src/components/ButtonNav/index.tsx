import React from 'react'
import { StyledButton, Wrapper, StyledLink } from './styled'
import { UserEdit, Users } from '@styled-icons/fa-solid'
import { PermContactCalendar } from '@styled-icons/material-rounded'
import { Theme, useThemeControl } from '../Theme'

interface Props {
	login: boolean
}

export const NavBeforeLogin = (theme: Theme): React.ReactElement => (
	<Wrapper>
		<StyledLink to="/register">
			<StyledButton setColor={theme} icon={UserEdit} title="Registrace" />
		</StyledLink>
		<StyledLink to="/login">
			<StyledButton
				setColor={theme}
				icon={PermContactCalendar}
				title="Přihlášení"
			/>
		</StyledLink>
	</Wrapper>
)

export const NavAfterLogin: React.FC = () => {
	const [theme] = useThemeControl()

	return (
		<Wrapper>
			<StyledLink to="/profile">
				<StyledButton
					setColor={theme}
					icon={UserEdit}
					title="Můj profil"
				/>
			</StyledLink>
			<StyledLink to="/matching">
				<StyledButton setColor={theme} icon={Users} title="Matching" />
			</StyledLink>
			<StyledLink to="/contacts">
				<StyledButton
					setColor={theme}
					icon={PermContactCalendar}
					title="Kontakty"
				/>
			</StyledLink>
		</Wrapper>
	)
}

export const ButtonNav: React.FC<Props> = ({ login }) => {
	const [theme] = useThemeControl()

	// We use two different ways to pass the theme for learning purposes
	return login ? <NavAfterLogin /> : NavBeforeLogin(theme)
}
