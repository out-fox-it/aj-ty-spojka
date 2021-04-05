import { CardData } from './types'

// Authors cards images
import jindrichmaca from 'assets/AuthorsCards/jindrichmaca.jpg'
import janachaloupkova from 'assets/AuthorsCards/janachaloupkova.jpg'
import martinavilimova from 'assets/AuthorsCards/martinavilimova.jpeg'
import tomashampl from 'assets/AuthorsCards/tomashampl.jpg'

export const cardsData: Readonly<CardData[]> = [
	{
		cardTitle: 'Jindřich Máca',
		cardSubtitle: '~ full-stack, functional programming addict ~',
		image: jindrichmaca,

		socialMediaLinks: {
			gitHub: 'https://github.com/macajind',
			linkedIn: 'https://www.linkedin.com/in/macajind/',
		},
	},
	{
		cardTitle: 'Jana Chaloupková',
		cardSubtitle: '~ front-end, Typescript, React, Clojurian ~',
		image: janachaloupkova,

		socialMediaLinks: {
			gitHub: 'https://github.com/agnes97',
			linkedIn: 'https://www.linkedin.com/in/agnes97',
			instagram: 'https://www.linkedin.com/in/agnes97',
		},
	},
	{
		cardTitle: 'Martina Vilímová',
		cardSubtitle: '~ front-end, TypeScript, React ~',
		image: martinavilimova,

		socialMediaLinks: {
			gitHub: 'https://github.com/MartinaVilimova',
			linkedIn: 'https://www.linkedin.com/in/martinavilimova/',
		},
	},
	{
		cardTitle: 'Tomáš Hampl',
		cardSubtitle: '~ back-end, TypeScript, React ~',
		image: tomashampl,

		socialMediaLinks: {
			gitHub: 'https://github.com/tomas90hampl',
			linkedIn: 'https://www.linkedin.com/in/tomáš-hampl-300b461b9/',
		},
	},
]
