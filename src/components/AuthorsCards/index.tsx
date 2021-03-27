import React from 'react'
import {
	CardsWrapper,
	AuthorsTitle,
	Card,
	CardContent,
	CardText,
	CardTitle,
	CardSubtitle,
	IconBar,
	CardIcon,
} from './styled'
import {
	LinkedinIn as LinkedIn,
	Github,
	Instagram,
} from '@styled-icons/fa-brands'
import { cardsData } from './data'

const AuthorsCards: React.FC = () => (
	<CardsWrapper>
		<AuthorsTitle>PROGRAMÁTOŘI (ČTI: KOUZELNÍCI)</AuthorsTitle>

		{cardsData.map((cardData, index) => (
			<Card key={index} image={cardData.image}>
				<CardContent>
					<CardText>
						<CardTitle>{cardData.cardTitle}</CardTitle>
						<CardSubtitle>{cardData.cardSubtitle}</CardSubtitle>
					</CardText>
					<IconBar>
						<CardIcon
							href={cardData.socialMediaLinks.gitHub}
							target="_blank"
						>
							<Github />
						</CardIcon>
						<CardIcon
							href={cardData.socialMediaLinks.linkedIn}
							target="_blank"
						>
							<LinkedIn />
						</CardIcon>
						{cardData.socialMediaLinks.instagram && (
							<CardIcon
								href={cardData.socialMediaLinks.instagram}
								target="_blank"
							>
								<Instagram />
							</CardIcon>
						)}
					</IconBar>
				</CardContent>
			</Card>
		))}
	</CardsWrapper>
)

export default AuthorsCards
