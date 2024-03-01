import { useEffect, useState } from 'react';
import { User } from '../../common/interface/user.types';
import { logger } from '../../common/helpers/logging.helper';
import { useCustomQuery } from '../../common/services/hooks/useCustomQuery';
import { QueryKey } from '../../common/interface/queryKeys.type';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../common/store';

export const useAuthState = () => {
  const [isCheckingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useRecoilState(userAtom);
  const [getUser, setGetUser] = useState(false);

  useCustomQuery<User>({
    queryKey: QueryKey.user,
    url: 'user',
    onSuccess: res => {
      if (res) {
        setUser(res);
      }
    },
    onSettled: () => {
      setCheckingAuth(false);
    },
    enabled: getUser
  });

  const checkAuth = () => {
    const cookies = document.cookie;
    const userCookie = cookies.split('=').find(cookie => cookie.startsWith('user_token'));

    if (userCookie) {
      setGetUser(true);
    } else {
      setCheckingAuth(false);
      setUser(null);
      logger.logError({ name: 'auth error', message: 'No user found', excludeCallStack: true });
    }
  };

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isCheckingAuth, user };
};
