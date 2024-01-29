import type { Meta, StoryObj } from '@storybook/react';
import EmailInput from '../../components/input/EmailInput';

const meta = {
  title: 'Example/Input',
  component: EmailInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
} satisfies Meta<typeof EmailInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    label: 'Email',
  },
};
