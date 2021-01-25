import React from 'react'
import { fireEvent } from '@testing-library/react'
import { Button } from '.'
import renderWithTheme from '../../testing/renderWithTheme'
import mentor from '../../assets/mentor.svg'

test('renders button with the icon, tests src and alt', () => {
	const { getByAltText } = renderWithTheme(
		<Button icon={mentor} alt="Mentor" />
	)

	const imageElement = getByAltText('Mentor')
	expect(imageElement.tagName).toBe('IMG')
	expect(imageElement.src).toContain(mentor)
	expect(imageElement.alt).toBe('Mentor')
})

test('renders button with title', () => {
	const { getByText } = renderWithTheme(<Button title="Mentor" />)

	const spanElement = getByText('Mentor')
	expect(spanElement.tagName).toBe('SPAN')
})

test('renders button with subtitle', () => {
	const { getByText } = renderWithTheme(
		<Button subtitle="Poznej nové přátele." />
	)

	const pElement = getByText('Poznej nové přátele.')
	expect(pElement.tagName).toBe('P')
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
