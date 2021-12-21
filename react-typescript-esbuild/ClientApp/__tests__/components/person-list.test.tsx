// __tests__/fetch.test.js
import React from 'react'
import { render, fireEvent, waitFor, screen, cleanup, configure } from '@testing-library/react'
import '@testing-library/jest-dom'

import PersonList from 'components/person-list'

beforeEach(() => {
    const props: any = {
        LevelsOfExpertise: [],
        PickedPeopleIds: []
    };
    render(<PersonList {...props} />);
})
afterEach(cleanup)
configure({ testIdAttribute: 'id' })

test('text input should be visible', async () => {
    const addOneMoreFriendButton = screen.getByText('Add one more friend');

    expect(addOneMoreFriendButton).toBeVisible();
})