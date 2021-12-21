import React from 'react'
import { render, fireEvent, waitFor, screen, cleanup, configure } from '@testing-library/react'
import '@testing-library/jest-dom'

import HiddenInput from '../src/hidden-input'

beforeEach(() => {
    const props: any = {
        formData: {
            textValue: 'bla bla hello 123',
            numberValue: 2589
        }
    };
    render(<HiddenInput {...props} />);
})
afterEach(cleanup)

configure({ testIdAttribute: 'name' })

test('should render given component', async () => {
    const testComponent = screen.getByText((content, element) => {
        return element?.tagName?.toLowerCase() === 'div'
    });

    expect(testComponent).toBeVisible();
})

test('should have text and number values', async () => {
    const textValue = screen.getByTestId('textValue');
    const numberValue = screen.getByTestId('numberValue');

    expect(textValue).toBeInTheDocument();
    expect(numberValue).toBeInTheDocument();
})
