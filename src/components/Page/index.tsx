import React from 'react'
import { GlobalWrapper } from './styled'

export const Page: React.FC = ({ children }) => {
	return <GlobalWrapper>{children}</GlobalWrapper>
}

export default Page
