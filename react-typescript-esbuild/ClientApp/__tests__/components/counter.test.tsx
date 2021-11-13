// __tests__/fetch.test.js
import React from 'react'
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from 'components/counter';

beforeEach(() => {
    render(<Counter message="Hello world" ></Counter>);
})
afterEach(cleanup)

test('should display given string parameter', async () => {
    expect(screen.getByText('Hello world')).toBeVisible();
})

test('counter should be one', async () => {
    expect(screen.getByText('Count: 1')).toBeVisible();
})

test('clicking button should increment counter', async () => {
    expect(screen.getByText('Count: 1')).toBeVisible();
    fireEvent.click(screen.getByText('Click me'))
    expect(screen.getByText('Count: 2')).toBeVisible();
    fireEvent.click(screen.getByText('Click me'))
    expect(screen.getByText('Count: 3')).toBeVisible();
    fireEvent.click(screen.getByText('Click me'))
    fireEvent.click(screen.getByText('Click me'))
    fireEvent.click(screen.getByText('Click me'))
    expect(screen.getByText('Count: 6')).toBeVisible();
})
