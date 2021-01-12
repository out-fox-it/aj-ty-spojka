import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

test('renders test text', () => {
	render(<Header />)
	const headerElement = screen.getByText(/test/i)
	expect(headerElement).toBeInTheDocument()
})
