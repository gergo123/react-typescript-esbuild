import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Counter from 'components/counter';

export default {
    title: 'Componens/Counter',
    component: Counter,
    argTypes: {
    },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    message: 'Hello from storybook'
};
