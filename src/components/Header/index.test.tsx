import React from 'react'
import renderWithTheme from '../../testing/renderWithTheme'
import Header from '.'

test('renders header text', () => {
	const { getByText } = renderWithTheme(<Header />)
	const headerElement = getByText('[: aj tý :] spojka')

	expect(headerElement.tagName).toBe('H1')
	expect(headerElement).toBeVisible()
})
