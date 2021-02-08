import React from 'react'
import NavBar from '../components/NavBar'
import RegisterForm from '../components/RegisterForm'

const Register: React.FC = () => (
	<>
		<NavBar login={false} />
		<RegisterForm />
	</>
)

export default Register
