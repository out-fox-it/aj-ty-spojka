import { NetworkType } from './components/Context'

export type ProfileType = {
	nickname: string
	motto?: string
	about: string
	skills: string[]
	socialNetworks: NetworkType[]
}
