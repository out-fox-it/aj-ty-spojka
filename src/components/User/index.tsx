import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import { authentication } from 'services/firebase'
import { getUserProfile, updateUserProfile } from './data'
import { Profile, User } from './types'

type UserContextType = {
	user: User | null
	isLoggedIn: boolean
	profile: Profile | null
	updateProfile: (update: Partial<Profile>) => void
}

const UserContext = createContext<UserContextType>({
	user: null,
	isLoggedIn: false,
	profile: null,
	updateProfile: () => {
		return
	},
})

const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User | null>(authentication.currentUser)
	const [profile, setProfile] = useState<Profile | null>(null)

	useEffect(
		() =>
			authentication.onAuthStateChanged((user) => {
				if (user) {
					getUserProfile(user.uid).then((profile) => {
						setUser(user)
						setProfile(profile)
					})
				} else {
					setUser(user)
				}
			}),
		[setUser, setProfile]
	)

	const updateProfile = useCallback(
		(update: Partial<Profile>) => {
			if (!profile) {
				return
			}

			updateUserProfile(profile)(update).then((profile) =>
				setProfile(profile)
			)
		},
		[profile]
	)

	const isLoggedIn = Boolean(user)

	return (
		<UserContext.Provider
			value={{
				user,
				isLoggedIn,
				profile,
				updateProfile,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = (): UserContextType => useContext(UserContext)

export default UserProvider
