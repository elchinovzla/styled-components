import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/button/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: String,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    label: 'I am a primary button',
    style: {
      ['color']: 'red',
    },
    onClick: () => alert('button clicked'),
  },
};
