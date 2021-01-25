import React from 'react'
import { StyledButton, Wrapper } from './styled'
import mentor from '../../assets/mentor.svg'
import buddy from '../../assets/buddy.svg'
import mentee from '../../assets/mentee.svg'

const clickMe = (): void => {
	alert('functionality will be added later')
}

export const ButtonNav: React.FC = () => {
	return (
		<Wrapper>
			<StyledButton
				onClick={clickMe}
				icon={mentor}
				alt="mentor"
				title="mentor"
				subtitle="Najdi si lekora, který ti pomůže s učením."
			/>
			<StyledButton
				onClick={clickMe}
				icon={buddy}
				alt="friends"
				title="buddy"
				subtitle="Poznej nové přátele."
			/>
			<StyledButton
				onClick={clickMe}
				icon={mentee}
				alt="mentee"
				title="mentee"
				subtitle="Předej své vědomosti někomu dalšímu."
			/>
		</Wrapper>
	)
}
