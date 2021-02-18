import React, { useEffect, useState } from 'react'
import Amplify, { API , Auth} from 'aws-amplify'
import awsmobile from '../aws-exports'
import NavBar from '../components/NavBar'

Amplify.configure(awsmobile)

const TestApi: React.FC = () => {

    const [getApiState, setGetApiState] = useState<boolean>(false)

    useEffect(() => {

        const getAPI = async() => {
		    await Auth.signIn('xxx', 'xxx')

            // @NOTE: Attempt to fetch data by fetch function

            // const session = await Auth.currentSession()
			// const idToken = session.getIdToken()
			// const jwtToken = idToken.getJwtToken()
            // await fetch('https://18wdkk8w6h.execute-api.eu-west-1.amazonaws.com/dev/members/name', {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': jwtToken
            //     }
            // }).then(response => console.log(response))
            
            // @NOTE: An alternative way
            API.get('membersapi', '/members/name', {}).then(response => console.log(response))

            await Auth.signOut()
        }

        getAPI()
        }, [getApiState])

	return (
		<>
			<NavBar login={true} />
            <button onClick={() => setGetApiState(!getApiState)}>Look the console 👀</button>
		</>
	)
}

export default TestApi
