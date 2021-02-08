import React from 'react'
import { StyledButton, Wrapper, StyledLink } from './styled'
import { UserEdit, Users } from '@styled-icons/fa-solid'
import { PermContactCalendar } from '@styled-icons/material-rounded'

const ButtonNav: React.FC = () => (
	<Wrapper>
		<StyledLink to="/profile">
			<StyledButton icon={UserEdit} title="Můj profil" />
		</StyledLink>
		<StyledLink to="/search-matching">
			<StyledButton icon={Users} title="Matching" />
		</StyledLink>
		<StyledLink to="/">
			<StyledButton icon={PermContactCalendar} title="Kontakty" />
		</StyledLink>
	</Wrapper>
)

export default ButtonNav
