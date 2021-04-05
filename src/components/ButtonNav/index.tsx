import React, { ComponentProps } from 'react'
import {
	UserEdit,
	Users,
	UserPlus,
	UserLock,
	IdCard,
} from '@styled-icons/fa-solid'

import { useThemeControl } from 'components/Theme'
import { useUser } from 'components/User'

import { StyledButton, Wrapper, ButtonLink } from './styled'

const ThemedStyledButton: React.FC<ComponentProps<typeof StyledButton>> = ({
	...props
}) => {
	const [theme] = useThemeControl()

	return <StyledButton $theme={theme} {...props} />
}

const NavBeforeLogin: React.FC = () => (
	<Wrapper>
		<ButtonLink to="/register">
			<ThemedStyledButton icon={UserPlus} title="Registrace" />
		</ButtonLink>
		<ButtonLink to="/login">
			<ThemedStyledButton icon={UserLock} title="Přihlášení" />
		</ButtonLink>
	</Wrapper>
)

const NavAfterLogin: React.FC = () => (
	<Wrapper>
		<ButtonLink to="/profile">
			<ThemedStyledButton icon={UserEdit} title="Profil" />
		</ButtonLink>
		<ButtonLink to="/matching/buddy">
			<ThemedStyledButton icon={Users} title="Matching" />
		</ButtonLink>
		<ButtonLink to="/contacts">
			<ThemedStyledButton icon={IdCard} title="Kontakty" />
		</ButtonLink>
	</Wrapper>
)

const ButtonNav: React.FC = () => {
	const { isLoggedIn } = useUser()

	return isLoggedIn ? <NavAfterLogin /> : <NavBeforeLogin />
}

export default ButtonNav
