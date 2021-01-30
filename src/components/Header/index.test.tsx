import React from 'react'
import renderWithTheme from '../../testing/renderWithTheme'
import Header from '.'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders header text', () => {
	const { getByText } = renderWithTheme(
		<Router>
			<Header />
		</Router>
	)
	const headerElement = getByText('[: aj tý :] spojka')

	expect(headerElement.tagName).toBe('A')
	expect(headerElement).toBeVisible()
})
