import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
} from '@mui/material/TextField';

export interface InputProps
  extends Omit<
    FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps,
    'variant'
  > {
  label: string;
  isRequired?: boolean;
  variant?: 'filled' | 'outlined' | 'standard';
}
