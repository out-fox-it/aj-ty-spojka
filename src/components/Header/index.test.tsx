import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'

test('renders header text', () => {
	render(<Header />)
	const headerElement = screen.getByText('Hello, World!')
	expect(headerElement.tagName).toBe('H1')
	expect(headerElement).toBeVisible()
})
