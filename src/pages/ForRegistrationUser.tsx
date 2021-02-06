import { AmplifySignOut } from '@aws-amplify/ui-react'
import React, { useEffect, useState } from 'react'
import { ButtonNav } from '../components/ButtonNav'
import Header from '../components/Header'
import Amplify, { API } from 'aws-amplify'
import Auth from '@aws-amplify/auth'
import awsmobile from '../aws-exports'

Amplify.configure(awsmobile)

const myInit = {
	// OPTIONAL
	headers: {}, // OPTIONAL
	response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
	queryStringParameters: {
		// OPTIONAL
		name: 'param',
	},
}

Auth.configure({
	userPoolId: awsmobile.aws_user_pools_id,
	identityPoolId: awsmobile.aws_cognito_identity_pool_id,
	userPoolWebClientId: awsmobile.aws_user_pools_web_client_id,
	region: awsmobile.aws_project_region,
})

type member = {
	id: string
	type: string
	bio: string
	email: string
}

const getMembers = async (): Promise<member[]> => {
	const data = await fetch(
		'https://js1jrbejmg.execute-api.eu-west-1.amazonaws.com/dev/members/:id'
	)
	return data.json()
}

/*
fetch("https://httpbin.org/basic-auth/user/passwd", {
  headers: new Headers({
    "Authorization": `Basic ${base64.encode(`${login}:${password}`)}`
  }),
}).then(response => {
  if (!response.ok) throw new Error(response.status);
  return response.json();
})
*/

const getUsers = async (token: string): Promise<any> => {
	const data = await fetch(
		'https://rio9fbgtvb.execute-api.eu-west-1.amazonaws.com/dev/users/:id',
		{
			headers: new Headers({
				Authorization: `Bearer ${token}`,
			}),
		}
	)
	return data.json()
}

const authorization = async (
	username: string,
	password: string
): Promise<boolean> => {
	try {
		await Auth.signIn({ username, password })
		const user = await Auth.currentAuthenticatedUser()
		console.log(user, 'USER')

		return true
	} catch (error) {
		console.log(error)
		return false
	}
}

const ForRegistrationUser: React.FC = () => {
	const [state, changeState] = useState<member[]>([])
	const [logged, changeLoggedState] = useState<boolean>(false)

	useEffect(() => {
		// authorization('TomTest123','TomTest123').then(isLogged => changeLoggedState(isLogged))
		getMembers().then(changeState)
		getUsers().then((users) => console.log(users))
	}, [])

	return (
		<>
			<Header />
			<ButtonNav />
			<h1>Ahoj, tenhle content je jenom pro přihlášené uživatele</h1>
			<p>Kliknutím na toto tlačitko, se můžete odhlásit</p>
			<p>id: {state[0]?.id}</p>
			<p>type: {state[0]?.type}</p>
			<p>bio: {state[0]?.bio}</p>
			<p>email: {state[0]?.email}</p>
			<p>Is logged: {logged}</p>
			<AmplifySignOut />
		</>
	)
}

export default ForRegistrationUser
