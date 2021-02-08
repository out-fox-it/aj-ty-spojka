import React from 'react'
import {
	Wrapper,
	BasicDataProfile,
	StyledAvatar,
	Name,
	Profession,
	WrapperNavigation,
	WrapperData,
	StyledLink,
} from './styled'
import Avatar from '../Avatar'
import Button from '../Button'

interface Props {
	fullName?: string
	picture?: string
}

const NavbarProfile: React.FC<Props> = ({ fullName, picture }) => (
	<Wrapper>
		<WrapperData>
			<BasicDataProfile>
				<StyledAvatar>
					<Avatar picture={picture} fullName={fullName} />
				</StyledAvatar>
				<Name>{fullName}</Name>
				<Profession>UX Designer</Profession>
			</BasicDataProfile>
		</WrapperData>

		<WrapperNavigation>
			<StyledLink to="/search-matching">
				<Button title="Matching" />
			</StyledLink>
		</WrapperNavigation>
	</Wrapper>
)

export default NavbarProfile
