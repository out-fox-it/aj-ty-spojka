import React from 'react'
import { LayoutType } from '../ButtonContent'
import { ButtonLink } from '.'
import renderWithTheme from '../../../testing/renderWithTheme'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, screen } from '@testing-library/react'

test('renders button with link and layout center and tests the page change when clicked', () => {
	const { getByText } = renderWithTheme(
		<Router>
			<ButtonLink
				layout={LayoutType.center}
				link="/test-page"
				title="Mentor"
			/>
			<Switch>
				<Route path="/test-page">
					<h1>You are on the test page.</h1>
				</Route>
			</Switch>
		</Router>
	)

	fireEvent.click(getByText('Mentor'))

	const spanElement = getByText('Mentor')
	expect(spanElement.tagName).toBe('SPAN')
	expect(screen.getByText('You are on the test page.')).toBeInTheDocument()
})
