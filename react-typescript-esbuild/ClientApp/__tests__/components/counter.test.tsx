// __tests__/fetch.test.js
import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from 'components/counter';

test('should display given string parameter', async () => {
    render(<Counter message="Hello world" ></Counter>)

    expect(screen.getByText('Hello world')).toBeVisible();
})
