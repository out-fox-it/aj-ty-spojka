import React from 'react'
import { StyledButton, Wrapper } from './styled'
import {
	UserFriends,
	ChalkboardTeacher,
	GraduationCap,
} from '@styled-icons/fa-solid'

const clickMe = (): void => {
	console.log('functionality will be added later')
}

const ButtonMatching: React.FC = () => (
	<Wrapper>
		<StyledButton
			onClick={clickMe}
			icon={ChalkboardTeacher}
			title="Mentor"
		/>
		<StyledButton onClick={clickMe} icon={UserFriends} title="Buddy" />
		<StyledButton onClick={clickMe} icon={GraduationCap} title="Mentee" />
	</Wrapper>
)

export default ButtonMatching
