import React, { createContext, useContext, useState } from 'react'
import firebase from 'firebase'
import { authentication } from 'services/firebase'

type UserContextType = {
	user: firebase.User | null
	isLoggedIn: boolean
}

const UserContext = createContext<UserContextType>({
	user: null,
	isLoggedIn: false,
})

const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<firebase.User | null>(
		authentication.currentUser
	)

	authentication.onAuthStateChanged((user) => setUser(user))

	const isLoggedIn = Boolean(user)

	return (
		<UserContext.Provider
			value={{
				user,
				isLoggedIn,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = (): UserContextType => useContext(UserContext)

export default UserProvider
