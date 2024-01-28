import type { Meta, StoryObj } from '@storybook/react';
import CurrencyInput from '../../components/input/CurrencyInput';

const meta = {
  title: 'Example/Input',
  component: CurrencyInput,
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
} satisfies Meta<typeof CurrencyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Currency: Story = {
  args: {
    label: 'Currency',
  },
};
