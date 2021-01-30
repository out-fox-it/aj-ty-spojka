import React from 'react'
import { StyledButton, Wrapper, StyledLink } from './styled'
import { UserEdit, Users } from '@styled-icons/fa-solid'
import { PermContactCalendar } from '@styled-icons/material-rounded'

export const ButtonNav: React.FC = () => {
	return (
		<Wrapper>
			<StyledLink to="/profile">
				<StyledButton icon={<UserEdit />} title="můj profil" />
			</StyledLink>
			<StyledLink to="/search-matching">
				<StyledButton icon={<Users />} title="matching" />
			</StyledLink>
			<StyledLink to="/">
				<StyledButton icon={<PermContactCalendar />} title="kontakty" />
			</StyledLink>
		</Wrapper>
	)
}
