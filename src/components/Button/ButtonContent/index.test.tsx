import React from 'react'
import { ButtonContent, LayoutType } from '.'
import renderWithTheme from '../../../testing/renderWithTheme'
import mentor from '../../../assets/mentor.svg'

test('renders button content with layout center, src and alt', () => {
	const { getByAltText } = renderWithTheme(
		<ButtonContent layout={LayoutType.center} icon={mentor} alt="Mentor" />
	)

	const imageElement = getByAltText('Mentor')
	expect(imageElement.tagName).toBe('IMG')
	expect(imageElement.src).toContain(mentor)
})

test('renders button content with layout center and title', () => {
	const { getByText } = renderWithTheme(
		<ButtonContent layout={LayoutType.center} title="Mentor" />
	)

	const spanElement = getByText('Mentor')
	expect(spanElement.tagName).toBe('SPAN')
})

test('renders button content with layout center and subtitle', () => {
	const { getByText } = renderWithTheme(
		<ButtonContent
			layout={LayoutType.center}
			subtitle="Poznej nové přátele."
		/>
	)

	const pElement = getByText('Poznej nové přátele.')
	expect(pElement.tagName).toBe('P')
})
