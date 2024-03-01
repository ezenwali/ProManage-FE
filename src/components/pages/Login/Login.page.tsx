import { Button, InputField, Spacer } from '../../atoms';
import { SocialMediaAuth } from '../../molecules/SocialMediaAuth/SocialMediaAuth';
import { Field, Formik } from 'formik';
import { loginValidation } from '../../../common/helpers/form.validator';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { logger } from '../../../common/helpers/logging.helper';
import { MutationKey } from '../../../common/interface/mutationKey.types';
import { Path } from '../../../routes/path';
import { useCustomMutation } from '../../../common/services/hooks/useCustomMutation';
import { StyledForm } from '../../../common/style';

const initialValues = { email: '', password: '' };

export const LoginPage = () => {
  const { loginFailed } = useParams();
  const navigate = useNavigate();

  const { mutateAsync: LoginUser, isLoading } = useCustomMutation<null, typeof initialValues>({
    mutationKey: MutationKey.login,
    url: 'auth/login',
    onOkay: () => {
      navigate(`/${Path.home}`, { replace: true });
    }
  });

  useEffect(() => {
    if (loginFailed) {
      logger.logError({ name: 'logging-error', message: 'Log in with your email and password', showToast: true });
    }
  }, [loginFailed]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async data => {
        await LoginUser(data);
      }}>
      {({ handleSubmit, errors, isSubmitting }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field
            name="email"
            label="Email"
            error={errors.email}
            placeholder="Email"
            autoComplete="email"
            type="email"
            as={InputField}
            validate={loginValidation.email}
          />
          <Spacer height={20} />
          <Field
            name="password"
            label="Password"
            placeholder="Password"
            autoComplete="current-password"
            type="password"
            error={errors.password}
            as={InputField}
            validate={loginValidation.password}
          />
          <Spacer height={20} />
          <Button type="submit" disabled={isSubmitting} isLoading={isLoading}>
            Login
          </Button>
          <Spacer height={30} />
          <SocialMediaAuth type="Login" />
        </StyledForm>
      )}
    </Formik>
  );
};
