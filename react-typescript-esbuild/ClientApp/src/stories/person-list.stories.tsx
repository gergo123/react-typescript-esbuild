import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import PersonList from 'components/person-list';
import Person from 'models/person';

export default {
    title: 'Componens/People Picker',
    component: PersonList,
    decorators: [withMock],
    argTypes: {
    },
} as ComponentMeta<typeof PersonList>;
const Template: any = (args: any) => <PersonList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    LevelsOfExpertise: ['Low', 'Medium', 'High']
};

var p1 = new Person(2, 'Bela 2');
var p2 = new Person(3, 'Bela 3');
var p3 = new Person(4, 'Bela 4');

const persons = [p1, p2, p3]
Primary.parameters = {
    mockData: [
        {
            url: 'api/people?q=:iq',
            method: 'GET',
            status: 200,
            response: persons,
        },
    ],
};
