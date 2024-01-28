import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from '../../components/button/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    label: 'Login',
    style: {},
    onClick: () => alert('button clicked'),
    type: 'primary',
  },
};

export const SecondaryButton: Story = {
  args: {
    label: 'cancel',
    style: {},
    onClick: () => alert('button clicked'),
    type: 'secondary',
  },
};

export const ButtonWithEndIcon: Story = {
  args: {
    label: 'Login',
    style: {},
    onClick: () => alert('button clicked'),
    type: 'primary',
    endIcon: <LoginIcon />,
  },
};

export const ButtonWithStartIcon: Story = {
  args: {
    label: 'cancel',
    style: {},
    onClick: () => alert('button clicked'),
    type: 'secondary',
    startIcon: <CloseIcon />,
  },
};
