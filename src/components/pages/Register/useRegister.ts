import { FormikErrors } from 'formik';
import { useCounter } from '../../../common/hooks/useCounter';
import { MutationKey } from '../../../common/interface/mutationKey.types';
import { useCustomMutation } from '../../../common/services/hooks/useCustomMutation';
import { registerValidation } from '../../../common/helpers/form.validator';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../../routes/path';

const initialValues = { email: '', verificationCode: '', password: '', verifyPassword: '' };

export const useRegister = () => {
  const { counter, setCount } = useCounter();
  const navigate = useNavigate();

  const onSubmitSendVerrificationCode = (
    email: string,
    setErrors: (err: FormikErrors<typeof initialValues>) => void,
    errors: FormikErrors<typeof initialValues>
  ) => {
    const emailErr = registerValidation.email(email);

    setErrors({ ...errors, email: emailErr });
    if (emailErr) return;

    mutate({ email });
  };

  const { mutate } = useCustomMutation<{ isSent: boolean }, { email: string }>({
    mutationKey: MutationKey.verifyEmail,
    url: 'auth/genrate-code',
    onOkay: res => {
      if (res.isSent) {
        setCount(60);
        toast.success('Verification code ');
      }
    }
  });

  const { mutateAsync: registerUser, isLoading } = useCustomMutation<null, typeof initialValues>({
    mutationKey: MutationKey.register,
    url: 'auth/register',
    onOkay: () => {
      navigate(`/${Path.home}`, { replace: true });
    }
  });

  return {
    registerUser,
    initialValues,
    onSubmitSendVerrificationCode,
    counter,
    isLoading
  };
};
