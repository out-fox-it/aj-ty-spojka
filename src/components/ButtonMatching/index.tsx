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
			subtitle="Najdi si lekora, který ti pomůže s učením."
		/>
		<StyledButton
			onClick={clickMe}
			icon={UserFriends}
			title="Buddy"
			subtitle="Poznej nové přátele."
		/>
		<StyledButton
			onClick={clickMe}
			icon={GraduationCap}
			title="Mentee"
			subtitle="Předej své vědomosti někomu dalšímu."
		/>
	</Wrapper>
)

export default ButtonMatching
