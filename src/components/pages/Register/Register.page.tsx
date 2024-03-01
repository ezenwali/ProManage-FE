import { Field, Formik } from 'formik';
import { Button, InputField, Spacer } from '../../atoms';
import { SocialMediaAuth } from '../../molecules/SocialMediaAuth/SocialMediaAuth';
import { Button as ButtonMui } from '@mui/material';
import { registerValidation } from '../../../common/helpers/form.validator';
import { useRegister } from './useRegister';
import { StyledForm } from '../../../common/style';

export const RegisterPage = () => {
  const { registerUser, initialValues, onSubmitSendVerrificationCode, counter, isLoading } = useRegister();

  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errs: Record<string, any> = {};

        Object.keys(values).forEach(key => {
          const err = registerValidation[key](values[key as keyof typeof initialValues], values);

          if (err) errs[key] = err;
        });

        return errs;
      }}
      onSubmit={async values => {
        await registerUser(values);
      }}>
      {({ handleSubmit, errors, isSubmitting, values, setErrors }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field
            action={
              <ButtonMui
                variant="sendCode"
                disabled={counter > 0}
                onClick={() => onSubmitSendVerrificationCode(values.email, setErrors, errors)}>
                {counter > 0 ? `Sent ${counter}` : 'Send Code'}
              </ButtonMui>
            }
            name="email"
            label="Email"
            error={errors.email}
            placeholder="Email"
            autoComplete="off"
            type="email"
            as={InputField}
          />
          <Spacer height={20} />
          <Field
            name="verificationCode"
            label="Verification Code"
            error={errors.verificationCode}
            placeholder="Verification Code"
            autoComplete="off"
            type="text"
            as={InputField}
          />

          <Spacer height={20} />
          <Field
            name="password"
            label="Password"
            error={errors.password}
            placeholder="Password"
            autoComplete="off"
            type="password"
            ignoreForgotPassowrd={true}
            as={InputField}
          />

          <Spacer height={20} />

          <Field
            name="verifyPassword"
            label="Confirm Password"
            error={errors.verifyPassword}
            placeholder="Password"
            autoComplete="off"
            type="password"
            ignoreForgotPassowrd={true}
            as={InputField}
          />

          <Spacer height={20} />
          <Button disabled={isSubmitting} type="submit" isLoading={isLoading}>
            Register
          </Button>
          <Spacer height={30} />
          <SocialMediaAuth type="Register" />
        </StyledForm>
      )}
    </Formik>
  );
};
