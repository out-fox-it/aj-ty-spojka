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

interface Props {
	login: boolean
}

export const NavBeforeLogin = (theme: Theme): React.ReactElement => (
	<Wrapper>
		<ButtonLink to="/register">
			<StyledButton setColor={theme} icon={UserPlus} title="Registrace" />
		</ButtonLink>
		<ButtonLink to="/login">
			<StyledButton setColor={theme} icon={UserLock} title="Přihlášení" />
			<StyledButton setColor={theme} icon={UserEdit} title="Registrace" />
		</ButtonLink>
		<ButtonLink to="/login">
			<StyledButton setColor={theme} icon={IdCard} title="Přihlášení" />
		</ButtonLink>
	</Wrapper>
)

export const NavAfterLogin: React.FC = () => {
	const [theme] = useThemeControl()

	return (
		<Wrapper>
			<ButtonLink to="/profile">
				<StyledButton
					setColor={theme}
					icon={UserEdit}
					title="Můj profil"
				/>
			</ButtonLink>
			<ButtonLink to="/matching">
				<StyledButton setColor={theme} icon={Users} title="Matching" />
			</ButtonLink>
			<ButtonLink to="/contacts">
				<StyledButton setColor={theme} icon={IdCard} title="Kontakty" />
			</ButtonLink>
		</Wrapper>
	)
}

export const ButtonNav: React.FC<Props> = ({ login }) => {
	const [theme] = useThemeControl()

	// We use two different ways to pass the theme for learning purposes
	return login ? <NavAfterLogin /> : NavBeforeLogin(theme)
}
