interface Name {
	title: string
	first: string
	last: string
}

interface Picture {
	large: string
	medium: string
	thumbnail: string
}

interface Location {
	street: string
	city: string
	state: string
}

interface Login {
	username: string
	password: string
}

interface Id {
	name: string
	values: string
}

export interface RandomUser {
	name: Name
	picture: Picture
	location: Location
	login: Login
	id: Id
	email: string
	phone: string
}

export const url = 'https://randomuser.me/api/'

export const getProfileData = async (): Promise<RandomUser | null> => {
	try {
		const data = await fetch(url)
		const jsonData = await data.json()
		return jsonData.results[0]
	} catch (error) {
		console.error(error)
		return null
	}
}
