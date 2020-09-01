import React from 'react'
import { Provider } from 'react-redux'
import store from 'utils/configureStore'
import {render, screen} from '@testing-library/react'

import Form from 'components/Form'

jest.mock('react-router', () => ({
  withRouter: Comp => props => <Comp {...props} />,
}))

test('full app rendering', () => {
  render(<Provider store={store}><Form /></Provider>)
  expect(screen.getByTestId('add-todo-form-display')).toHaveTextContent("Add todo")
})
