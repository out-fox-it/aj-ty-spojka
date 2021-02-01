import React from 'react'
import { ButtonNav } from '../components/ButtonNav'
import Header from '../components/Header'
import RegisterForm from '../components/RegisterForm'

const Register: React.FC = () => {
	return (
		<>
			<Header />
			<ButtonNav />
			<RegisterForm />
		</>
	)
}

export default Register
