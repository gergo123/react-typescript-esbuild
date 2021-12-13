// __tests__/fetch.test.js
import React from 'react'
import { render, fireEvent, waitFor, screen, cleanup, configure } from '@testing-library/react'
import '@testing-library/jest-dom'

import HiddenInput from 'hoc/hidden-input'
import PeopleStore from './../../src/stores/people-store'

class TestClass implements PeopleStore {
    public people: any[]

    getFormData(): object {
        return [
            {
                id: 1,
                name: 'John'
            },
            {
                id: 23,
                name: 'Jenifer Aniston',
                address: {
                    county: 'NY',
                    street: 'Flatbush avenue 66/B'
                }
            }
        ]
    }
    addPeople(...persons: any[]): void {
        throw new Error('Method not implemented.')
    }
}

beforeEach(() => {
    const props: any = {
        isArray: true,
        name: 'items',
    };
    var Comp = HiddenInput(() => <div>Hello from random 'component'.</div>, new TestClass)
    render(<Comp {...props} />);
})
afterEach(cleanup)

configure({ testIdAttribute: 'name' })

test('should have first element of array flattened', async () => {
    const idElm = screen.getByTestId('items[0].id');
    const nameElm = screen.getByTestId('items[0].name');

    expect(idElm).toBeInTheDocument();
    expect(nameElm).toBeInTheDocument();
    expect(idElm).toHaveValue('1');
    expect(nameElm).toHaveValue('John');
})

test('should have second element of array flattened', async () => {
    const idElm = screen.getByTestId('items[1].id');
    const nameElm = screen.getByTestId('items[1].name');

    expect(idElm).toBeInTheDocument();
    expect(nameElm).toBeInTheDocument();
    expect(idElm).toHaveValue('23');
    expect(nameElm).toHaveValue('Jenifer Aniston');
})

test('should have second element of array with address object flattened', async () => {
    const addressCountyElm = screen.getByTestId('items[1].address.county');
    const addressStreetElm = screen.getByTestId('items[1].address.street');

    expect(addressCountyElm).toBeInTheDocument();
    expect(addressStreetElm).toBeInTheDocument();
    expect(addressCountyElm).toHaveValue('NY');
    expect(addressStreetElm).toHaveValue('Flatbush avenue 66/B');
});
