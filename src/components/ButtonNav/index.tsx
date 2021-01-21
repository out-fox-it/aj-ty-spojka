import React from 'react'
import { ButtonLink, LayoutType } from '../Button'
import { Wrapper } from './styled'
import mentor from '../../assets/mentor.svg'
import buddy from '../../assets/buddy.svg'
import mentee from '../../assets/mentee.svg'

export const ButtonNav: React.FC = () => {
	return (
		<Wrapper>
			<ButtonLink
				layout={LayoutType.center}
				link=""
				icon={mentor}
				alt="mentor"
				title="mentor"
				subtitle="Najdi si lekora, který ti pomůže s učením"
			></ButtonLink>
			<ButtonLink
				layout={LayoutType.center}
				link=""
				icon={buddy}
				alt="friends"
				title="buddy"
				subtitle="Poznej nové přátele."
			></ButtonLink>
			<ButtonLink
				layout={LayoutType.center}
				link=""
				icon={mentee}
				alt="mentee"
				title="mentee"
				subtitle="Předej své vědomosti někomu dalšímu."
			></ButtonLink>
		</Wrapper>
	)
}
