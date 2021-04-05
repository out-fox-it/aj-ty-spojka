import React from 'react'
import { fireEvent } from '@testing-library/react'
import renderWithTheme from 'testing/renderWithTheme'
import Button from '.'

test('renders button with title', () => {
	const { getByText } = renderWithTheme(<Button title="Mentor" />)

	const spanElement = getByText('Mentor')
	expect(spanElement.tagName).toBe('SPAN')
})

test('renders button with titleSmall', () => {
	const { getByText } = renderWithTheme(<Button titleSmall="Mentor" />)

	const spanElement = getByText('Mentor')
	expect(spanElement.tagName).toBe('SPAN')
})

test('renders button with function and tests call function when clicked', () => {
	const mockFunction = jest.fn()

	const { getByText } = renderWithTheme(
		<Button onClick={mockFunction} title="Mentee" />
	)

	fireEvent.click(getByText('Mentee'))

	const spanElement = getByText('Mentee')
	expect(spanElement.tagName).toBe('SPAN')
	expect(mockFunction).toBeCalled()
})
