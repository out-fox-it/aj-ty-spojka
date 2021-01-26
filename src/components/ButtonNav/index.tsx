import React from 'react'
import { StyledButton, Wrapper } from './styled'
import {UserFriends, ChalkboardTeacher, GraduationCap} from '@styled-icons/fa-solid'

const clickMe = (): void => {
	alert('functionality will be added later')
}

export const ButtonNav: React.FC = () => {
	return (
		<Wrapper>
			<StyledButton
				onClick={clickMe}
				icon={<ChalkboardTeacher />}
				title="mentor"
				subtitle="Najdi si lekora, který ti pomůže s učením."
			/>
			<StyledButton
				onClick={clickMe}
				icon={<UserFriends />}
				title="buddy"
				subtitle="Poznej nové přátele."
			/>
			<StyledButton
				onClick={clickMe}
				icon={<GraduationCap />}
				title="mentee"
				subtitle="Předej své vědomosti někomu dalšímu."
			/>
		</Wrapper>
	)
}
