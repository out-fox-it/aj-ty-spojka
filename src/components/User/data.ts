import { firestore } from 'services/firebase'
import { Profile } from './types'

export const getUserProfile = async (
	userId: string
): Promise<Profile | null> => {
	try {
		const profileSnapshot = await firestore
			.collection('profiles')
			.doc(userId)
			.get()

		if (!profileSnapshot.exists) {
			return null
		}

		return { id: profileSnapshot.id, ...profileSnapshot.data() } as Profile
	} catch (error) {
		console.error(
			'Firestore failed to get a profile data because of:',
			error
		)

		return null
	}
}

export const updateUserProfile = (profile: Profile) => async (
	update: Partial<Profile>
): Promise<Profile> => {
	const updatedProfile: Profile = { ...profile, ...update }

	try {
		await firestore
			.collection('profiles')
			.doc(profile.id)
			.update(updatedProfile)

		return updatedProfile
	} catch (error) {
		console.error(
			'Firestore failed to update a profile data because of:',
			error
		)

		return profile
	}
}
