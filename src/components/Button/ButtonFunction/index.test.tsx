import React from 'react'
import { LayoutType } from '../ButtonContent'
import { ButtonFunction } from '.'
import renderWithTheme from '../../../testing/renderWithTheme'
import { fireEvent } from '@testing-library/react'

test('renders button with function and layout line and tests call function when clicked', () => {
	const mockFunction = jest.fn()

	const { getByText } = renderWithTheme(
		<ButtonFunction
			layout={LayoutType.line}
			click={mockFunction}
			title="Mentee"
		/>
	)
	fireEvent.click(getByText('Mentee'))

	const spanElement = getByText('Mentee')
	expect(spanElement.tagName).toBe('SPAN')
	expect(mockFunction).toBeCalled()
})
