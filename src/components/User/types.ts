import firebase from 'firebase'

export type User = firebase.User

export type Profile = {
	id: string
	nickname: string
	motto?: string
	about?: string
	socialNetworks: string[]
}
