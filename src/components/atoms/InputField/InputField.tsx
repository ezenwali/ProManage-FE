import { Typography } from '@mui/material';
import { StyledInput, StyledInputCon, classes } from './Input.styles';
import { HTMLInputTypeAttribute } from 'react';

interface InputProps {
  id?: string;
  className?: string;
  name: string;
  value: string | number;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  disabled?: boolean;
  autoComplete?: string;
  label: string;
  ignoreForgotPassowrd?: boolean;
  action?: React.ReactNode;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputProps> = ({
  autoComplete,
  disabled,
  name,
  value,
  type,
  placeholder,
  className,
  label,
  ignoreForgotPassowrd,
  action,
  id,
  error,
  onChange
}) => {
  return (
    <StyledInputCon>
      <div className={classes.text_layout}>
        <label htmlFor={id ? id : name}>
          <Typography className={classes.label}>{label}</Typography>
        </label>

        {type === 'password' && !ignoreForgotPassowrd && <Typography variant="h6">forgot password?</Typography>}
      </div>
      <div className={classes.inputCon}>
        <StyledInput
          disabled={disabled}
          placeholder={placeholder}
          className={className}
          value={value}
          name={name}
          id={id ? id : name}
          type={type}
          autoComplete={autoComplete}
          onChange={onChange}
          error={!!error}
        />
        {action && <div>{action}</div>}
      </div>
      <Typography variant="h5">{error}</Typography>
    </StyledInputCon>
  );
};
