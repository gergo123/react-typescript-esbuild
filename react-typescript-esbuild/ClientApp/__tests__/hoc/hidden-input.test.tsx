// __tests__/fetch.test.js
import React from 'react'
import { render, fireEvent, waitFor, screen, cleanup, configure } from '@testing-library/react'
import '@testing-library/jest-dom'

import HiddenInput from 'hoc/hidden-input'
import PeopleStore from './../../src/stores/people-store'

class TestClass implements PeopleStore {
    public people: any[]
    getFormData(): object {
        return {
            textValue: 'bla bla hello 123',
            numberValue: 2589
        }
    }
    addPeople(...persons: any[]): void {
        throw new Error('Method not implemented.')
    }
}

beforeEach(() => {
    const props: any = {
        passMe: 999,
    };
    var Comp = HiddenInput((props) => <div {...props}>Hello from random 'component'.</div>, new TestClass)
    render(<Comp {...props} />);
})
afterEach(cleanup)

configure({ testIdAttribute: 'name' })

test('should render given component', async () => {
    const testComponent = screen.getByText('Hello from random \'component\'.');

    expect(testComponent).toBeVisible();
})

test('should pass props to the given component', async () => {
    const testComponent = screen.getByText('Hello from random \'component\'.');

    expect(testComponent).toHaveAttribute('passMe', "999");
})

test('should have text and number values', async () => {
    const textValue = screen.getByTestId('textValue');
    const numberValue = screen.getByTestId('numberValue');

    expect(textValue).toBeInTheDocument();
    expect(numberValue).toBeInTheDocument();
})
