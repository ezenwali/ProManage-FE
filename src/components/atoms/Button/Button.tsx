import classNames from 'classnames';
import { StyledButton, classes } from './Button.styles';
import { ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export const Button: React.FC<CustomButtonProps> = ({ isLoading, disabled, children, className, ...restProps }) => {
  return (
    <StyledButton
      {...restProps}
      className={classNames(classes.root, className)}
      disabled={disabled || isLoading}
      isLoading={isLoading}>
      {isLoading ? 'Loading' : children}
    </StyledButton>
  );
};
