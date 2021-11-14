import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Layout } from './Layout';

export default {
  title: 'Container/Layout',
  component: Layout,
} as Meta;

const Template: Story = (args) => <Layout {...args} />;

export const LayoutStory = Template.bind({});
