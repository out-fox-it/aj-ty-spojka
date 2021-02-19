import React from 'react'
import {
	Wrapper,
	AuthorsTitle,
	Card1,
	Card2,
	Card3,
	Card4,
	CardContent,
	CardText,
	CardTitle,
	CardSubtitle,
	IconBar,
	CardIcon,
} from './styled'
import { LinkedinIn, Github, Instagram } from '@styled-icons/fa-brands'

const AuthorsCards: React.FC = () => (
	<Wrapper>
		<AuthorsTitle>PROGRAMÁTOŘI (ČTI: KOUZELNÍCI)</AuthorsTitle>

		{/* Jindřich Máca */}
		<Card1>
			<CardContent>
				<CardText>
					<CardTitle>Jindřich Máca</CardTitle>
					<CardSubtitle>
						~ full-stack, functional programming addict ~
					</CardSubtitle>
				</CardText>
				<IconBar>
					<CardIcon
						href="https://www.linkedin.com/in/macajind/"
						target="_blank"
					>
						<LinkedinIn />
					</CardIcon>
					<CardIcon
						href="https://github.com/macajind"
						target="_blank"
					>
						<Github />
					</CardIcon>
				</IconBar>
			</CardContent>
		</Card1>

		{/* Jana Chaloupková */}
		<Card2>
			<CardContent>
				<CardText>
					<CardTitle>Jana Chaloupková</CardTitle>
					<CardSubtitle>
						~ front-end, Typescript, React, Clojurian ~
					</CardSubtitle>
				</CardText>
				<IconBar>
					<CardIcon
						href="https://www.linkedin.com/in/agnes97"
						target="_blank"
					>
						<LinkedinIn />
					</CardIcon>
					<CardIcon href="https://github.com/agnes97" target="_blank">
						<Github />
					</CardIcon>
					<CardIcon
						href="https://www.instagram.com/agnes.and.life/"
						target="_blank"
					>
						<Instagram />
					</CardIcon>
				</IconBar>
			</CardContent>
		</Card2>

		{/* Martina */}
		<Card3>
			<CardContent>
				<CardText>
					<CardTitle>Martina Vilímová</CardTitle>
					<CardSubtitle>
						~ front-end, TypeScript, React ~
					</CardSubtitle>
				</CardText>
				<IconBar>
					<CardIcon
						href="https://www.linkedin.com/in/martinavilimova/"
						target="_blank"
					>
						<LinkedinIn />
					</CardIcon>
					<CardIcon
						href="https://github.com/MartinaVilimova"
						target="_blank"
					>
						<Github />
					</CardIcon>
				</IconBar>
			</CardContent>
		</Card3>

		{/* Tomáš */}
		<Card4>
			<CardContent>
				<CardText>
					<CardTitle>Tomáš Hampl</CardTitle>
					<CardSubtitle>~ back-end, TypeScript, React ~</CardSubtitle>
				</CardText>
				<IconBar>
					<CardIcon
						href="https://www.linkedin.com/in/tomáš-hampl-300b461b9/"
						target="_blank"
					>
						<LinkedinIn />
					</CardIcon>
					<CardIcon
						href="https://github.com/tomas90hampl"
						target="_blank"
					>
						<Github />
					</CardIcon>
				</IconBar>
			</CardContent>
		</Card4>
	</Wrapper>
)

export default AuthorsCards
