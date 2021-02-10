import React from 'react'
import renderWithTheme from '../../testing/renderWithTheme'
import RegisterForm from '.'

test('renders RegisterForm with h1 text', () => {
	const { getByText } = renderWithTheme(
		<RegisterForm onSuccess={() => false} />
	)

	const h1Element = getByText('REGISTRAČNÍ FORMULÁŘ')
	expect(h1Element.tagName).toBe('H1')
})
