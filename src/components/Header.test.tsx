import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

test('renders test text', () => {
	render(<Header />)
	const linkElement = screen.getByText(/test/i)
	expect(linkElement).toBeInTheDocument()
})
