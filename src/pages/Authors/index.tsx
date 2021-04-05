import React from 'react'
import {
	LinkedinIn as LinkedIn,
	Github,
	Instagram,
} from '@styled-icons/fa-brands'

import NavBar from 'components/NavBar'
import Page from 'components/Page'
import Footer from 'components/Footer'

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
import { cardsData } from './data'

const Authors: React.FC = () => (
	<>
		<NavBar />
		<Page>
			<CardsWrapper>
				<AuthorsTitle>PROGRAMÁTOŘI (ČTI: KOUZELNÍCI)</AuthorsTitle>

				{cardsData.map((cardData, index) => (
					<Card key={index} image={cardData.image}>
						<CardContent>
							<CardText>
								<CardTitle>{cardData.cardTitle}</CardTitle>
								<CardSubtitle>
									{cardData.cardSubtitle}
								</CardSubtitle>
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
										href={
											cardData.socialMediaLinks.instagram
										}
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
		</Page>
		<Footer />
	</>
)

export default Authors
