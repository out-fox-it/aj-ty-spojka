import React from 'react'
import { GlobalWrapper } from './styled'

const Page: React.FC = ({ children }) => {
	return <GlobalWrapper>{children}</GlobalWrapper>
}

export default Page
