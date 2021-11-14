import { Meta, Story } from '@storybook/react';
import React from 'react';
import { CorrectionModal } from './CorrectionModal';

export default {
  title: 'Container/SEO',
  component: CorrectionModal,
} as Meta;

const Template: Story = () => <CorrectionModal />;

export const CorrectionModalStory = Template.bind({});
CorrectionModalStory.args = {
  title: 'test',
};
