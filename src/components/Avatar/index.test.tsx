import React from 'react'
import { Avatar } from '.'
import renderWithTheme from '../../testing/renderWithTheme'

test('renders avatar with src', () => {
	const { getByAltText } = renderWithTheme(
		<Avatar picture="/route-to-picture" fullName={'random-name'} />
	)

	const imgElement = getByAltText('random-name')

	expect(imgElement.tagName).toBe('IMG')
	expect(imgElement.src).toContain('/route-to-picture')
	expect(imgElement.alt).toBe('random-name')
})
