import React from 'react'
import {
	Wrapper,
	WrapperContent,
	BasicDataProfile,
	StyledAvatar,
	Name,
	Profession,
	WrapperNavigation,
	WrapperData,
	StyledLink,
} from './styled'
import { Navbar } from '../Navbar'
import { Button } from '../Button'
import { Avatar } from '../Avatar'

interface Props {
	fullName?: string
	picture?: string
}

export const NavbarProfile: React.FC<Props> = ({ fullName, picture }) => {
	return (
		<>
			<Wrapper>
				<WrapperContent>
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
						<Navbar />
						<StyledLink to="/search-matching">
							<Button title="Matching" />
						</StyledLink>
					</WrapperNavigation>
				</WrapperContent>
			</Wrapper>
		</>
	)
}
