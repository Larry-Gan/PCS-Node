import { Meta, Story } from '@storybook/react';
import React from 'react';
import { SEO, SEOProps } from './SEO';

export default {
  title: 'Container/SEO',
  component: SEO,
} as Meta;

const Template: Story<SEOProps> = (args) => <SEO {...args} />;

export const SEOStory = Template.bind({});
SEOStory.args = {
  title: 'test',
};
